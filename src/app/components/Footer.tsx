"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
    fadeInUp, 
    containerVariants, 
    listItemVariants,
    textReveal
} from '@/app/utils/animations';

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-[#17604F] text-white py-12"
        >
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        className="space-y-4"
                    >
                        <h3 className="text-2xl font-bold">Shirke Farm</h3>
                        <p className="text-gray-300">
                            Quality grapes and agricultural products from our family farm.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-4"
                    >
                        <h4 className="text-xl font-semibold">Quick Links</h4>
                        <ul className="space-y-2">
                            {['Home', 'About', 'Products', 'Gallery', 'Contact'].map((item) => (
                                <motion.li
                                    key={item}
                                    variants={listItemVariants}
                                    whileHover={{ x: 5 }}
                                >
                                    <Link
                                        href={`/${item.toLowerCase()}`}
                                        className="text-gray-300 hover:text-[#E48A57] transition-colors duration-300"
                                    >
                                        {item}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        className="space-y-4"
                    >
                        <h4 className="text-xl font-semibold">Contact Us</h4>
                        <ul className="space-y-2 text-gray-300">
                            <motion.li
                                variants={textReveal}
                                initial="hidden"
                                animate="visible"
                            >
                                <span className="block">Address:</span>
                                <span>123 Farm Road, City, State</span>
                            </motion.li>
                            <motion.li
                                variants={textReveal}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.1 }}
                            >
                                <span className="block">Phone:</span>
                                <span>+1 234 567 890</span>
                            </motion.li>
                            <motion.li
                                variants={textReveal}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.2 }}
                            >
                                <span className="block">Email:</span>
                                <span>info@shirkefarm.com</span>
                            </motion.li>
                        </ul>
                    </motion.div>
                </div>

                {/* Copyright */}
                <motion.div
                    variants={fadeInUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.3 }}
                    className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300"
                >
                    <p>&copy; {new Date().getFullYear()} Shirke Farm. All rights reserved.</p>
                </motion.div>
            </div>
        </motion.footer>
    );
}
 