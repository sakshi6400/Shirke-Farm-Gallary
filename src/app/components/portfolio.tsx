"use client";
import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';

const products = [
    {
        title: "Fresh Grapes",
        image: "/products/raisin.jpg",
        description: "Premium quality fresh grapes available in various varieties including seedless, red, and black grapes.",
        link: "/products/fresh-grapes",
        git: "/products/fresh-grapes"
    },
    {
        title: "Organic Raisins",
        image: "/products/grape1.jpeg",
        description: "Naturally dried organic raisins made from our finest grape varieties.",
        link: "/products/organic-raisins",
        git: "/products/organic-raisins"
    },
    {
        title: "Grape Juice",
        image: "/products/grape3.jpeg",
        description: "Pure, natural grape juice made from our fresh harvest.",
        link: "/products/grape-juice",
        git: "/products/grape-juice"
    },
    {
        title: "Wine Grapes",
        image: "/products/grape4.jpeg",
        description: "Special varieties of grapes cultivated specifically for wine production.",
        link: "/products/wine-grapes",
        git: "/products/wine-grapes"
    },
    {
        title: "Table Grapes",
        image: "/products/grape2.jpg",
        description: "High-quality table grapes perfect for direct consumption.",
        link: "/products/table-grapes",
        git: "/products/table-grapes"
    },
    {
        title: "Organic Fertilizers",
        image: "/products/mango1.jpeg",
        description: "Natural fertilizers made from our farm's organic waste.",
        link: "/products/organic-fertilizers",
        git: "/products/organic-fertilizers"
    }
];

const Portfolio = () => {
    return (
        <section className="w-full py-24 bg-gradient-to-b from-white to-[#f8f8f8]" id="portfolio">
            <div className="max-w-[1200px] mx-auto px-6">
                <h1 className="text-[#17604F] text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-16 text-center">Our
                    <span className="text-[#E48A57]"> Products</span>
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 75 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="relative h-64">
                                {product.image.endsWith('.MP4') || product.image.endsWith('.mp4') ? (
                                    <video 
                                        src={product.image} 
                                        className="w-full h-full object-cover"
                                        controls
                                    />
                                ) : (
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        fill
                                        className="object-cover"
                                    />
                                )}
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-[#17604F] mb-2">{product.title}</h3>
                                <p className="text-gray-600 mb-4">{product.description}</p>
                                <div className="flex space-x-4">
                                    <Link href={product.link} className="flex items-center space-x-2 text-[#E48A57] hover:text-[#17604F] transition-colors duration-300">
                                        <FaLink />
                                        <span>Learn More</span>
                                    </Link>
                                    <Link href={product.git} className="flex items-center space-x-2 text-[#E48A57] hover:text-[#17604F] transition-colors duration-300">
                                        <FaGithub />
                                        <span>Details</span>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
 
 