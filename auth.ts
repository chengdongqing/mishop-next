import Credentials from '@auth/core/providers/credentials';
import NextAuth from 'next-auth';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
        phone: {}
      },
      async authorize(credentials) {
        let user = null;

        // logic to salt and hash password
        const pwHash = saltAndHashPassword(credentials.password);

        // logic to verify if the user exists
        user = await getUserFromDb(credentials.email, pwHash);

        if (!user) {
          // No user found, so this is their first attempt to login
          // Optionally, this is also the place you could do a user registration
          throw new Error('Invalid credentials.');
        }

        // return user object with their profile data
        return user;
      }
    })
  ]
});
