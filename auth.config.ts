import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/auth/signin'
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/order');
      if (isOnDashboard) {
        return isLoggedIn;
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/', nextUrl));
      }
      return true;
    }
  },
  providers: []
} satisfies NextAuthConfig;
