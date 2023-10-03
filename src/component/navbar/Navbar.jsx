"use Client"
import Link from 'next/link';

import React from 'react';

const Links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "About",
        url: "/about",
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog",
    },
    {
        id: 4,
        title: "Portfolio",
        url: "/portfolio",
    },
    {
        id: 5,
        title: "Dashboard",
        url: "/dashboard",
    },
];

const Navbar = () => {
    return (
        <div>
            <Link href="/">Bloggerr</Link>
            <div>
                {Links.map((link) => (
                    <Link key={link.id} href={link.url}>
                        {link.title}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Navbar;
