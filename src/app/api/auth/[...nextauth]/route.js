import AppleProvider from 'next-auth/providers/apple';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

import NextAuth from 'next-auth';

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'Email', type: 'Text' },
                email: { label: 'Password', type: 'password' }
            },
            async authorize(credentials, req) {}
        }),
        GoogleProvider({
            name: 'google',
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    session: { strategy: 'jwt' }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
