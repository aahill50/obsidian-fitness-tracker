import clsx from 'clsx';
import Link from 'next/link';
import { ReactNode } from 'react';

const classes = {
    h: clsx('font-bold text-4xl px-12 mb-12'),
    p: clsx('text-2xl text-center mb-6'),
};

const H1 = ({ children }: { children: ReactNode }) => (
    <h1 className={classes.h}>{children}</h1>
);

const P = ({ children }: { children: ReactNode }) => (
    <p className={classes.p}>{children}</p>
);

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col items-center p-24'>
            <div className={clsx('text-2xl', 'w-screen','mb-12', 'underline','flex', 'justify-evenly')}>
                <Link href={'/track'} className='cursor-pointer'>Fitness Tracker</Link>
            </div>
            <H1>Obsidian Fitness</H1>
            <P>
                The goal of Obsidian fitness is to create a fitness tracker app
                that can also generate a summary file in markdown format(.md)
                for use with Obsidian
            </P>
            <P>
                You'll be able to add your own exercises to track. You'll also
                be able to track your progress over time
            </P>
        </main>
    );
}
