import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/login',
  },
// Protect dashboard route:
	 callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user; 
      //The !! operator is used to convert the value to a boolean
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; 
        // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
        //Redirect login user to dashboard
      }
      return true;
    },
  },
  providers: [], 
  // Add providers with an empty array for now
} satisfies NextAuthConfig;
