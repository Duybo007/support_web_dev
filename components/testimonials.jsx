"use client"

import React from 'react'
import { Carousel, IconButton, Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";

function Testimonials() {
    return (
        <motion.div 
        initial={{ y: -200, opacity: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 2, delay: 1 }}
                    viewport={{ once: true }}
        className='h-[850px] md:h-[600px] w-full max-w-[1900px] mx-auto grid grid-cols-1 md:grid-cols-2'
        id="testimonials">
            <div className='flex flex-col justify-center items-center'>
                <div className='flex flex-col gap-4 justify-center items-start pl-4 w-[340px]'>
                    <h2 className='uppercase  text-3xl md:text-4xl   font-bold tracking-wider mb-3'>Lorem Ipsum <br /> Dolor sit amet</h2>
                    <div className='flex gap-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF7218" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF7218" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF7218" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF7218" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF7218" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className='flex items-center'>
                <Carousel
                    prevArrow={({ handlePrev }) => (
                        <IconButton
                            variant="text"
                            color="black"
                            size="lg"
                            onClick={handlePrev}
                            className="!absolute top-2/4 left-4 -translate-y-2/4"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>

                        </IconButton>
                    )}
                    nextArrow={({ handleNext }) => (
                        <IconButton
                            variant="text"
                            color="black"
                            size="lg"
                            onClick={handleNext}
                            className="!absolute top-2/4 !right-4 -translate-y-2/4"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </IconButton>
                    )}
                    navigation={({ setActiveIndex, activeIndex, length }) => (
                        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                          {new Array(length).fill("").map((_, i) => (
                            <span
                              key={i}
                              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                                activeIndex === i ? "w-3 h-3 bg-[#FFC718]" : "w-3 h-3 bg-[#FFE465]"
                              }`}
                              onClick={() => setActiveIndex(i)}
                            />
                          ))}
                        </div>
                      )}
                    className="rounded-xl h-full md:h-1/2  w-full lg:w-3/4">

                    <div className="relative h-full w-full">
                        <div className="absolute inset-0 grid h-full w-full place-items-center ">
                            <div className="w-3/4 text-center ">
                                <Typography
                                    variant="h1"
                                    className="mb-3 text-xl text-primary"
                                >
                                    John Doe 08/08/2019
                                </Typography>
                                <Typography
                                    variant="lead"
                                    color="black"
                                    className="text-left opacity-80"
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Typography>
                            </div>
                        </div>
                    </div>

                    <div className="relative h-full w-full">
                        <div className="absolute inset-0 grid h-full w-full place-items-center ">
                            <div className="w-3/4 text-center ">
                                <Typography
                                    variant="h1"
                                    className="mb-3 text-xl text-primary"
                                >
                                    John Doe 08/08/2019
                                </Typography>
                                <Typography
                                    variant="lead"
                                    color="black"
                                    className="text-left opacity-80"
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Typography>
                            </div>
                        </div>
                    </div>
                    
                    <div className="relative h-full w-full">
                        <div className="absolute inset-0 grid h-full w-full place-items-center ">
                            <div className="w-3/4 text-center ">
                                <Typography
                                    variant="h1"
                                    color="black"
                                    className="mb-3 text-xl text-primary"
                                >
                                    John Doe 08/08/2019
                                </Typography>
                                <Typography
                                    variant="lead"
                                    color="black"
                                    className="text-left opacity-80"
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Typography>
                            </div>
                        </div>
                    </div>
                </Carousel>
            </div>
        </motion.div>
    )
}

export default Testimonials