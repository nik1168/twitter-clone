import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import TwitterProvider from 'next-auth/providers/twitter';

import {TWITTER_CLIENT_ID, TWITTER_CLIENT_SECRET} from '../../../lib/constants';

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET ?? '',
      version: '2.0',
    }),
    TwitterProvider({
      clientId: TWITTER_CLIENT_ID ?? '',
      clientSecret: TWITTER_CLIENT_SECRET ?? '',
      version: '2.0',
    }),
  ],
});
