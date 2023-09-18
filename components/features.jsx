"use client"

import React from 'react'
import { motion } from "framer-motion";

function Features() {
    return (
        <div id="features" className='flex flex-col w-full max-w-[1900px] md:h-screen mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 h-screen md:h-1/2'>
                <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2, delay: 0.5 }}
                    viewport={{ once: true }}
                    className='flex flex-col justify-center items-center'>
                    <div className='flex flex-col gap-4 justify-center items-start pl-4 w-[340px]'>
                        <h2 className='uppercase  text-3xl md:text-4xl   font-bold tracking-wider mb-3'>Lorem Ipsum <br /> Dolor sit amet</h2>
                        
                    </div>
                </motion.div>
                <motion.div className='bg-[#FAFAFA] flex justify-center items-center'>
                    <div className='grid grid-cols-2 gap-[25px] 2xl:gap-[30px] w-[500px]'>
                        <motion.div 
                            initial={{ y: 200, opacity: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className='flex flex-col justify-center items-center gap-5'>
                            <div className='flex justify-center items-center  border-[1px] border-button_primary rounded-full p-5 w-[100px] h-[100px] '>
                                <img
                                    className='w-[80px] mr-[-10px]'
                                    src="/home-expertise.svg" />

                            </div>
                            <p className='uppercase text-xl 2xl:text-2xl font-bold text-center'>Lorem</p>
                        </motion.div>
                        <motion.div 
                            initial={{ y: 200, opacity: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            viewport={{ once: true }}
                            className='flex flex-col justify-center items-center gap-5'>
                            <div className='flex justify-center items-center border-[1px] border-button_primary rounded-full p-5  w-[100px]  h-[100px]'>
                                <img
                                    className=' '
                                    src="/home-hygiene.svg" />

                            </div>
                            <p className='uppercase text-xl 2xl:text-2xl font-bold text-center'>Lorem Ipsum</p>
                        </motion.div>
                        <motion.div 
                            initial={{ y: 200, opacity: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.75 }}
                            viewport={{ once: true }}
                            className='flex flex-col justify-center items-center gap-5'>
                            <div className='flex justify-center items-center border-[1px] border-button_primary rounded-full p-5  w-[100px]  h-[100px]'>
                                <img
                                    className=''
                                    src="/home-lab.svg" />
                            </div>
                            <p className='uppercase text-xl 2xl:text-2xl font-bold text-center'>Lorem Ipsum</p>
                        </motion.div>
                        <motion.div 
                            initial={{ y: 200, opacity: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1 }}
                            viewport={{ once: true }}
                            className='flex flex-col justify-center items-center gap-5'>
                            <div className='flex justify-center items-center border-[1px] border-button_primary rounded-full p-5  w-[100px]  h-[100px]'>
                                <img
                                    className='w-[70px]'
                                    src="/home-retention.svg" />

                            </div>
                            <p className='uppercase text-xl 2xl:text-2xl font-bold text-center'>Lorem</p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
            <motion.div 
                initial={{ y: 200, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className='banner md:h-1/2 w-full bg-banner-2-pattern bg-cover bg-no-repeat bg-center grid grid-cols-1 md:grid-cols-2'>
                <div>
                </div>
                <div className='flex flex-col justify-start md:justify-center items-center'>
                    <div className='flex flex-col justify-center items-start pl-4 w-[340px] md:w-[500px]  py-1 backdrop-blur-xl'>
                        <h3 className='uppercase text-primary text-3xl md:text-4xl font-bold tracking-wider mb-4 '>Lorem Ipsum</h3>
                        <p className='text-lg pb-4 leading-tight '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <button className='uppercase py-3 px-2 xl:py-5 xl:px-6 mt-2 bg-button_secondary text-white'>button button</button>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Features