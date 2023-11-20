import AppleProvider from 'next-auth/providers/apple';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

import NextAuth from 'next-auth';

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied
                const user = { id: '1', name: 'Demo User', email: 'user@domain.com' };
                if (credentials.email === 'user@domain.com' && credentials.password === 'password') {
                    return user;
                } else {
                    return false;
                }
            }
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
