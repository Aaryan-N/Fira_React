import React, {ReactNode} from 'react';
import Navbar from "@/components/Navbar";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Fira",
    description: "The next generation of Discord bot.",
};

const HomeLayout = ({ children }: {children : ReactNode}) => {
    return (
        <main className='relative'>
            <Navbar/>
            <div className='flex'>
                <section className='flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14'>
                    <div className='w-full`'>
                        {children}
                    </div>
                </section>
            </div>
        </main>
    );
};

export default HomeLayout;