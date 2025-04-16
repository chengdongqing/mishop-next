import { users } from '@/lib/schema';
import {
  findUserByIdentifierAndPassword,
  findUserByPhoneNumberAndVerificationCode
} from '@/services/users';
import Credentials from '@auth/core/providers/credentials';
import NextAuth from 'next-auth';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        identifier: {},
        password: {},
        phone: {},
        code: {}
      },
      async authorize(credentials) {
        const { identifier, password, phone, code } = credentials;
        let user: typeof users.$inferSelect;

        if (identifier && password) {
          user = await findUserByIdentifierAndPassword(
            identifier as string,
            password as string
          );
        } else if (phone && code) {
          user = await findUserByPhoneNumberAndVerificationCode(
            phone as string,
            code as string
          );
        }

        return user;
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/auth/signin'
  }
});
