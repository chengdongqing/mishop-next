import Credentials from '@auth/core/providers/credentials';
import NextAuth from 'next-auth';

export const { signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      authorize: (user) => user
    })
  ],
  pages: {
    signIn: '/auth/signin'
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session({ session, token }) {
      session.user.id = token.id as string;
      return session;
    }
  }
});
