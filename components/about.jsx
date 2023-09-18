"use client"

import React from 'react'
import { motion } from "framer-motion";

const About = () => {
    return (
        <div id="about" className='flex flex-col w-full max-w-[1900px] md:h-screen mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 h-screen md:h-1/2'>
                <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2, delay: 1 }}
                    viewport={{ once: true }}
                    
                    className='flex flex-col justify-center items-center'>
                    <div className='flex flex-col gap-4 justify-center items-start pl-4 w-[340px]'>
                        <h2 className='uppercase text-primary text-3xl md:text-4xl   font-bold tracking-wider mb-3'>Lorem Ipsum</h2>
                        <p className=' text-lg leading-tight'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <a className=' text-primary font-bold text-xl cursor-pointer flex '>
                            &gt;
                            Lorem Ipsum</a>
                    </div>
                </motion.div>
                <motion.div 
                    initial={{ x: 200, opacity: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, delay: 1 }}
                    viewport={{ once: true }}
                    className='bg-about-pattern bg-cover bg-no-repeat bg-center'></motion.div>
            </div>
            <motion.div 
                initial={{ y: 200, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className='banner md:h-1/2 w-full bg-banner-1-pattern bg-cover bg-no-repeat bg-center grid grid-cols-1 md:grid-cols-2'>
                <div className='flex flex-col justify-end md:justify-center items-center'>
                    <div className='flex flex-col justify-center items-start pl-4 w-[340px]'>
                        <h3 className='uppercase text-primary text-3xl md:text-4xl font-bold tracking-wider mb-4'>Lorem Ipsum</h3>
                        <button className='uppercase py-3 px-2 xl:py-5 xl:px-6 bg-button_secondary text-white'>button button</button>
                    </div>
                </div>
                <div>

                </div>
            </motion.div> 
        </div>
    )
}

export default About