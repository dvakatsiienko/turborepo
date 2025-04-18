/* Core */
import { z } from 'zod';

// TODO: move to https://create.t3.gg/en/usage/env-variables

/**
 * Specify your server-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 */
const server = z.object({
    DATABASE_URL: z.string().url(),
    NODE_ENV:     z.enum([ 'development', 'test', 'production' ]),
    NEXTAUTH_SECRET:
        process.env.NODE_ENV === 'production' ? z.string().min(1) : z.string().min(1).optional(),
    NEXTAUTH_URL: z.preprocess(
        // This makes Vercel deployments not fail if you don't set NEXTAUTH_URL.
        // Since NextAuth.js automatically uses the VERCEL_URL if present.
        (str) => process.env.VERCEL_URL ?? str,
        // VERCEL_URL doesn't include `https` so it cant be validated as a URL
        process.env.VERCEL ? z.string().min(1) : z.string().url(),
    ),

    GITHUB_CLIENT_ID:     z.string().min(1),
    GITHUB_CLIENT_SECRET: z.string().min(1),
});

/**
 * Specify your client-side environment variables schema here. This way you can ensure the app isn't
 * built with invalid env vars. To expose them to the client, prefix them with `NEXT_PUBLIC_`.
 */
const client = z.object({}); // NEXT_PUBLIC_CLIENTVAR: z.string().min(1),

/**
 * @type {Record<keyof z.infer<typeof server> | keyof z.infer<typeof client>, string | undefined>}
 */
const processEnv = {
    DATABASE_URL:    process.env.DATABASE_URL,
    NODE_ENV:        process.env.NODE_ENV,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL:    process.env.NEXTAUTH_URL,

    GITHUB_CLIENT_ID:     process.env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
};

const merged = server.merge(client);

const isProtectingEnv = Boolean(process.env.SKIP_ENV_VALIDATION) === false;

const env = isProtectingEnv ? createProtectedEnv() : /** @type {MergedOutput} */ process.env;

/* Helpers */
function createProtectedEnv () {
    const isServer = typeof window === 'undefined';

    const parsed =
        /** @type {MergedSafeParseReturn} */
        isServer
            ? merged.safeParse(processEnv) // on server we can validate all env vars
            : client.safeParse(processEnv); // on client we can only validate the ones that are exposed

    if (parsed.success === false) {
        console.error('❌ Invalid environment variables:', parsed.error.flatten().fieldErrors);
        throw new Error('Invalid environment variables');
    }

    const protectedEnv = new Proxy(parsed.data, {
        get (target, prop) {
            if (typeof prop !== 'string') return void 0;

            // Throw a descriptive error if a server-side env var is accessed on the client
            // Otherwise it would just be returning `undefined` and be annoying to debug
            if (!isServer && !prop.startsWith('NEXT_PUBLIC_')) {
                throw new Error(process.env.NODE_ENV === 'production'
                        ? '❌ Attempted to access a server-side environment variable on the client'
                        : `❌ Attempted to access a server-side environment variable '${ prop }' on the client`);
            }

            return target[ /** @type {keyof typeof target} */ prop ];
        },
    });

    return protectedEnv;
}

/* Types */
/** @typedef {z.input<typeof merged>} MergedInput */
/** @typedef {z.infer<typeof merged>} MergedOutput */
/** @typedef {z.SafeParseReturnType<MergedInput, MergedOutput>} MergedSafeParseReturn */

export { env };
