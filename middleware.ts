import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
 
export default NextAuth(authConfig).auth;
 
export const config = {
  // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
	// configuring a middleware that adds authentication support to a Next.js application. The middleware runs on all paths except those that start with api, _next/static, _next/image, or end with .png.
};