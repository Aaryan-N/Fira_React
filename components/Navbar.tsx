import React from 'react';
import Link from 'next/link';

const Navbar = ({ }) => {
    return (
        <nav className="bg-gradient-to-t from-[#412534] to-[#302134] bg-[#313338] flex justify-between items-center w-full mx-auto pt-2 pb-2 mb-0 sticky top-0">
            <div>
                <img className="ml-3 rounded-full w-16 h-16" src="/" alt="Fira" />
            </div>
            <div className="text-[#FFE7BC]">
                <ul className="flex gap-[4vw]">
                    <li>
                        <Link href={"/features"} className="hover:text-gray-500">
                           Features
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;