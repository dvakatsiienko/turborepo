/* Core */
import NextAuth from 'next-auth';

/* Instruments */
import { authConfig } from './auth.config';

export const config = {
    // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
    matcher: [ '/((?!api|_next/static|_next/image|.*\\.png$).*)' ],
};

export default NextAuth(authConfig).auth;