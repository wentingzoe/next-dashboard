import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
	providers: [Credentials({})],
});

//Hashing converts a password into a fixed-length string of characters, which appears random, providing a layer of security even if the user's data is exposed.