"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {
    Navbar,
    MobileNav,
    Typography,
    IconButton
} from "@material-tailwind/react";

function NavBar() {
    const [active, setActive] = useState("");
    const [scrollingDown, setScrollingDown] = useState(false);
    const [openNav, setOpenNav] = React.useState(false);
    const [isMobile, setIsMobile] = useState();

    React.useEffect(() => {
        if (window.innerWidth <= 1024) {
            setIsMobile(true)
        }
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    // Define your original and alternate image sources
    const logoWhite = '/logo-white.svg';
    const logoColor = '/logo-color.svg';

    const handleScroll = () => {
        if (window.scrollY > 800) {
            // Scrolling down
            setScrollingDown(true);
        } else {
            // Scrolling back up
            setScrollingDown(false);
        }
    };

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 1024); // Adjust the threshold as needed
      };
    
      useEffect(() => {
        // Add the resize event listener when the component mounts
        window.addEventListener('resize', handleResize);
    
        // Remove the resize event listener when the component unmounts
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="large"
                className={`${active === "about" ? "text-button_secondary" : "text-primary"} p-1 text-xl  font-bold hover:text-button_secondary`}
            >
                <a onClick={() => {
                    setActive("about")
                    setOpenNav(false)
                    }} 
                    href="#about" className="flex items-center">
                    About
                </a>
            </Typography>
            <Typography
                as="li"
                variant="large"
                className={`${active === "features" ? "text-button_secondary" : "text-primary"} p-1 text-xl  font-bold hover:text-button_secondary`}
            >
                <a onClick={() => {
                    setActive("features")
                    setOpenNav(false)
                    }} 
                    href="#features" className="flex items-center">
                    Features
                </a>
            </Typography>
            <Typography
                as="li"
                variant="large"
                className={`${active === "testimonials" ? "text-button_secondary" : "text-primary"} p-1 text-xl  font-bold hover:text-button_secondary`}
            >
                <a onClick={() => {
                    setActive("testimonials")
                    setOpenNav(false)
                    }} 
                    href="#testimonials" className="flex items-center">
                    Testimonials
                </a>
            </Typography>
        </ul>
    );

    useEffect(() => {
        // Add the scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Remove the scroll event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='fixed w-full top-0  h-[100px] mb-[-100px] px-4 pt-3 z-20'>
            <Navbar className={`${!scrollingDown && "lg:backdrop-filter-none lg:bg-transparent lg:border-none lg:backdrop-blur-none lg:shadow-none"} sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 `}>
                <div className="flex items-center justify-between text-primary">
                    <Link href="/">
                        <img
                            className='w-[200px] md:w-[400px] h-full cursor-pointer'
                            onClick={() => setActive("/")}
                            src={scrollingDown || isMobile ? logoColor : logoWhite}
                        />
                    </Link>
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">{navList}</div>
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <MobileNav open={openNav}>
                    {navList}
                </MobileNav>
            </Navbar>
        </div>
    )
}

export default NavBar