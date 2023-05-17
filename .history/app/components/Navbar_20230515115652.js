"use client";

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isActive, setActive] = useState(false);
    
    return (
        <nav className="flex items-center justify-between flex-wrap bg-blue-500 p-6">
            <div className="flex items-center flex-no-shrink text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">Your Logo</span>
            </div>
            <div className="block lg:hidden">
                <button onClick={() => setActive(!isActive)} className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z" />
                    </svg>
                </button>
            </div>
            <div className={`${isActive ? '' : 'hidden'} w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
                <div className="text-sm lg:flex-grow">
                    {/* Add the use client directive to the Link components */}
                    <Link href="/about" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4" useClient>
                        About
                    </Link>
                    <Link href="/services" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4" useClient>
                        Services
                    </Link>
                    <Link href="/contact" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white" useClient>
                        Contact
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
