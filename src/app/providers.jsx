'use client';

import { SessionProvider } from 'next-auth/react';

import { ThemeProvider } from 'next-themes';

const Providers = ({ children, session }) => {
    return (
        <ThemeProvider attribute='class'>
            <SessionProvider session={session}>{children}</SessionProvider>
        </ThemeProvider>
    );
};

export default Providers;
