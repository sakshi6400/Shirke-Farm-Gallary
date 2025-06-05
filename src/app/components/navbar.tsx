"use client";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import {motion} from 'framer-motion';
import Link from "next/link";
import { 
    fadeInDown, 
    containerVariants, 
    listItemVariants,
    buttonVariants
} from '@/app/utils/animations';

const navLinks= [
    {title:"Home", path:"#home"},
    {title:"Products", path:"#portfolio"},
    {title:"About", path:"#about"},
    {title:"Gallery", path:"#gallery"},
    {title:"Contact", path:"#contact"},
];

const Navbar=()=> {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed w-full z-50 transition-all duration-300 ${
                isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
            }`}
        >
            <div className="max-w-[1400px] mx-auto px-6">
                <div className="flex justify-between items-center h-20">
                    <motion.div
                        variants={fadeInDown}
                        initial="hidden"
                        animate="visible"
                        className="flex items-center"
                    >
                        <Link href="/" className="text-2xl font-bold text-[#17604F]">
                            Shirke Farm
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="hidden md:flex space-x-8"
                    >
                        {navLinks.map((link) => (
                            <motion.div
                                key={link.title}
                                variants={listItemVariants}
                                whileHover={{ y: -2 }}
                            >
                                <Link
                                    href={link.path}
                                    className="text-[#17604F] hover:text-[#E48A57] transition-colors duration-300"
                                >
                                    {link.title}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-[#17604F]"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </motion.button>
                </div>

                {/* Mobile Navigation */}
                <motion.div
                    initial={false}
                    animate={isMenuOpen ? "open" : "closed"}
                    variants={{
                        open: { opacity: 1, height: "auto" },
                        closed: { opacity: 0, height: 0 }
                    }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden overflow-hidden"
                >
                    <motion.div
                        variants={containerVariants}
                        className="py-4 space-y-4"
                    >
                        {navLinks.map((link) => (
                            <motion.div
                                key={link.title}
                                variants={listItemVariants}
                                whileHover={{ x: 10 }}
                            >
                                <Link
                                    href={link.path}
                                    className="block text-[#17604F] hover:text-[#E48A57] transition-colors duration-300"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.title}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </motion.nav>
    )
}

export default Navbar








