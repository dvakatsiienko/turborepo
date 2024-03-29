/* Core */
import { createNextApiHandler } from '@trpc/server/adapters/next';

/* Instruments */
import { createTRPCContext, appRouter } from '@/server/trpc';
import { env } from '@/env.mjs';

// export API handler
export default createNextApiHandler({
    router:        appRouter,
    createContext: createTRPCContext,
    onError:
    env.NODE_ENV === 'development'
        ? ({ path, error }) => {
            console.error(`❌ tRPC failed on ${ path ?? '<no-path>' }: ${ error.message }`);
        }
        : void 0,
});
