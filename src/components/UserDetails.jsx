'use client';

import { signOut } from 'next-auth/react';

const UserDetails = ({ user }) => {
    return (
        <div className='flex gap-2 font-medium'>
            Welcome {user?.name} ({user?.email})
            <button onClick={() => signOut()}>
                <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                    <rect x='0' y='0' width='24' height='24' fill='none' stroke='none' />
                    <path
                        fill='currentColor'
                        d='M5 21q-.825 0-1.413-.588T3 19v-4h2v4h14V5H5v4H3V5q0-.825.588-1.413T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.588 1.413T19 21H5Zm5.5-4l-1.4-1.45L11.65 13H3v-2h8.65L9.1 8.45L10.5 7l5 5l-5 5Z'
                    />
                </svg>
            </button>
        </div>
    );
};

export default UserDetails;
