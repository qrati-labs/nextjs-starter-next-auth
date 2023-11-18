'use client';

import { useEffect, useState } from 'react';

import clsx from 'clsx';
import { useTheme } from 'next-themes';

const SWITCH_DATA = {
    system: {
        iconSvg: (
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='m-2 h-6 w-6'>
                <rect x='0' y='0' width='24' height='24' fill='none' stroke='none' />
                <path fill='currentColor' d='M1 2h22v8.25h-2V4H3v12h8.5v2H1V2Zm2 18h8.5v2H3v-2Z' />
                <path
                    fill='currentColor'
                    d='M19.5 12v1.376c.715.184 1.352.56 1.854 1.072l1.193-.689l1 1.732l-1.192.688a4.008 4.008 0 0 1 0 2.142l1.192.688l-1 1.732l-1.193-.689a4 4 0 0 1-1.854 1.072V22.5h-2v-1.376a3.996 3.996 0 0 1-1.854-1.072l-1.193.689l-1-1.732l1.192-.688a4.004 4.004 0 0 1 0-2.142l-1.192-.688l1-1.732l1.193.688a3.996 3.996 0 0 1 1.854-1.071V12h2Zm-2.751 4.283a1.991 1.991 0 0 0-.25.967c0 .35.091.68.25.967l.036.063a1.999 1.999 0 0 0 3.43 0l.036-.063c.159-.287.249-.616.249-.967c0-.35-.09-.68-.249-.967l-.036-.063a1.999 1.999 0 0 0-3.43 0l-.036.063Z'
                />
            </svg>
        )
    },
    light: {
        iconSvg: (
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256' className='m-2 h-6 w-6'>
                <rect x='0' y='0' width='256' height='256' fill='none' stroke='none' />
                <path
                    fill='currentColor'
                    d='M116 32V16a12 12 0 0 1 24 0v16a12 12 0 0 1-24 0Zm80 96a68 68 0 1 1-68-68a68.07 68.07 0 0 1 68 68Zm-24 0a44 44 0 1 0-44 44a44.05 44.05 0 0 0 44-44ZM51.51 68.49a12 12 0 1 0 17-17l-12-12a12 12 0 0 0-17 17Zm0 119l-12 12a12 12 0 0 0 17 17l12-12a12 12 0 1 0-17-17ZM196 72a12 12 0 0 0 8.49-3.51l12-12a12 12 0 0 0-17-17l-12 12A12 12 0 0 0 196 72Zm8.49 115.51a12 12 0 0 0-17 17l12 12a12 12 0 0 0 17-17ZM44 128a12 12 0 0 0-12-12H16a12 12 0 0 0 0 24h16a12 12 0 0 0 12-12Zm84 84a12 12 0 0 0-12 12v16a12 12 0 0 0 24 0v-16a12 12 0 0 0-12-12Zm112-96h-16a12 12 0 0 0 0 24h16a12 12 0 0 0 0-24Z'
                />
            </svg>
        )
    },
    dark: {
        iconSvg: (
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256' className='m-2 h-6 w-6'>
                <rect x='0' y='0' width='256' height='256' fill='none' stroke='none' />
                <path
                    fill='currentColor'
                    d='M236.37 139.4a12 12 0 0 0-12-3A84.07 84.07 0 0 1 119.6 31.59a12 12 0 0 0-15-15a108.86 108.86 0 0 0-54.91 38.48A108 108 0 0 0 136 228a107.09 107.09 0 0 0 64.93-21.69a108.86 108.86 0 0 0 38.44-54.94a12 12 0 0 0-3-11.97Zm-49.88 47.74A84 84 0 0 1 68.86 69.51a84.93 84.93 0 0 1 23.41-21.22Q92 52.13 92 56a108.12 108.12 0 0 0 108 108q3.87 0 7.71-.27a84.79 84.79 0 0 1-21.22 23.41Z'
                />
            </svg>
        )
    }
};

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();

    // https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className='flex overflow-hidden rounded-md border-2 border-gray-500'>
            {Object.keys(SWITCH_DATA).map((themeValue) => (
                <button
                    key={themeValue}
                    onClick={() => setTheme(themeValue)}
                    className={clsx(mounted && theme === themeValue ? 'bg-red-700 text-white' : '')}>
                    {SWITCH_DATA[themeValue].iconSvg}
                </button>
            ))}
        </div>
    );
};

export default ThemeSwitcher;
