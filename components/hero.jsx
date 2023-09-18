"use client"

import React from 'react'
import { motion } from "framer-motion";

function Hero() {
    return (
        <div className='w-full h-screen bg-hero-pattern bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center  gap-4 text-center'>
            <motion.div
                className='flex flex-col justify-center items-center gap-4'
                initial={{
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1.5
                }}>
                <h1 className='uppercase 2xl:text-[135px] lg:text-[100px] text-[50px] 2xl:mb-[-50px] mb-[-20px] font-bold welcome '>welcome to</h1>
                <h2 className='2xl:text-[120px] lg:text-[80px] text-[40px] text-white font-bold tracking-widest '>Rooster Grin</h2>
                <button className='uppercase py-3 px-2 xl:py-5 xl:px-6 bg-button_primary  font-bold text-lg md:text-3xl text-white'>button button</button>
            </motion.div>
        </div>
    )
}

export default Hero