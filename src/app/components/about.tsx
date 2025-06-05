"use client";
import React from "react"
import { FaHistory, FaCheckCircle, FaBoxes, FaLeaf } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { 
    fadeInUp, 
    containerVariants, 
    cardVariants,
    textReveal
} from '@/app/utils/animations';

const About = () => {
    return (
        <motion.section 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full py-24 bg-gradient-to-b from-white to-[#f8f8f8]" 
            id="about"
        >
            <div className="max-w-[1200px] mx-auto">
                <motion.h1 
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    className="text-[#17604F] text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-16 text-center"
                >
                    About
                    <span className="text-[#E48A57]">Us</span>
                </motion.h1>
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="px-6 md:p-0 grid md:grid-cols-8 gap-8 place-items-center"
                >
                    <motion.div 
                        variants={cardVariants}
                        className="w-full md:col-span-5 relative bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#17604F] to-[#1a6b5a] opacity-90"></div>
                        <div className="flex flex-row p-8 relative">
                            <motion.div 
                                variants={textReveal}
                                className="bg-white/10 p-6 rounded-lg"
                            >
                                <FaHistory size={80} className="text-[#E48A57]" />
                            </motion.div>
                            <div className="flex flex-col mt-4 ml-8">
                                <motion.h2 
                                    variants={textReveal}
                                    className="text-2xl font-bold text-white"
                                >
                                    Our Heritage
                                </motion.h2>
                                <motion.p 
                                    variants={textReveal}
                                    transition={{ delay: 0.1 }}
                                    className="text-lg text-white mt-4"
                                >
                                    With over 30 years of experience in grape farming, 
                                    we've built a legacy of excellence in producing high-quality grapes. Our family has been 
                                    dedicated to sustainable farming practices since 1990.
                                </motion.p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        variants={cardVariants}
                        className="w-full md:col-span-3 relative bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#E48A57] to-[#17604F] opacity-90"></div>
                        <div className="flex flex-row p-8 relative">
                            <motion.div 
                                variants={textReveal}
                                className="bg-white/10 p-6 rounded-lg"
                            >
                                <FaCheckCircle size={80} className="text-[#E48A57]" />
                            </motion.div>
                            <div className="flex flex-col mt-4 ml-8">
                                <motion.h2 
                                    variants={textReveal}
                                    className="text-2xl font-bold text-white"
                                >
                                    Quality Assurance
                                </motion.h2>
                                <motion.p 
                                    variants={textReveal}
                                    transition={{ delay: 0.1 }}
                                    className="text-lg text-white mt-4"
                                >
                                    We maintain strict quality control measures throughout 
                                    our farming process, ensuring that every grape meets our high standards of taste and freshness.
                                </motion.p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        variants={cardVariants}
                        className="w-full md:col-span-3 relative bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#E48A57] to-[#17604F] opacity-90"></div>
                        <div className="flex flex-row p-8 relative">
                            <motion.div 
                                variants={textReveal}
                                className="bg-white/10 p-6 rounded-lg"
                            >
                                <FaBoxes size={80} className="text-[#E48A57]" />
                            </motion.div>
                            <div className="flex flex-col mt-4 ml-8">
                                <motion.h2 
                                    variants={textReveal}
                                    className="text-2xl font-bold text-white"
                                >
                                    Our Products
                                </motion.h2>
                                <motion.p 
                                    variants={textReveal}
                                    transition={{ delay: 0.1 }}
                                    className="text-lg text-white mt-4"
                                >
                                    We offer a wide variety of grapes including seedless, 
                                    red, and black grapes. Our products are available both fresh and as premium raisins.
                                </motion.p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        variants={cardVariants}
                        className="w-full md:col-span-5 relative bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#17604F] to-[#1a6b5a] opacity-90"></div>
                        <div className="flex flex-row p-8 relative">
                            <motion.div 
                                variants={textReveal}
                                className="bg-white/10 p-6 rounded-lg"
                            >
                                <FaLeaf size={80} className="text-[#E48A57]" />
                            </motion.div>
                            <div className="flex flex-col mt-4 ml-8">
                                <motion.h2 
                                    variants={textReveal}
                                    className="text-2xl font-bold text-white"
                                >
                                    Sustainable Farming
                                </motion.h2>
                                <motion.p 
                                    variants={textReveal}
                                    transition={{ delay: 0.1 }}
                                    className="text-lg text-white mt-4"
                                >
                                    We practice sustainable farming methods, using organic 
                                    fertilizers and natural pest control. Our commitment to environmental stewardship ensures 
                                    healthy soil and water conservation for future generations.
                                </motion.p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default About;