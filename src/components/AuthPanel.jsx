import Link from 'next/link';

import { getServerSession } from 'next-auth/next';

import UserDetails from './UserDetails';
import { authOptions } from 'src/app/api/auth/[...nextauth]/route';

const AuthPanel = async ({}) => {
    const session = await getServerSession(authOptions);

    return session ? (
        <UserDetails user={session.user} />
    ) : (
        <div className='flex gap-2 rounded-md border-2 border-gray-500 p-2'>
            <Link href='/api/auth/signin' className='transition-colors hover:text-red-500'>
                Login
            </Link>
        </div>
    );
};

export default AuthPanel;
