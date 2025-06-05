"use client";
import React, { useState, useEffect, use } from "react";
import { FaImage, FaVideo, FaTimes, FaArrowLeft } from 'react-icons/fa';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { 
    fadeInUp, 
    fadeInDown, 
    fadeInLeft, 
    containerVariants, 
    cardVariants, 
    modalVariants, 
    hoverScale, 
    hoverRotate, 
    textReveal, 
    imageReveal,
    buttonVariants
} from '@/app/utils/animations';

type MediaFile = {
    type: 'image' | 'video';
    url: string;
    title: string;
};

const galleryItems: MediaFile[] = [
    // Videos
    {
        type: 'video',
        url: '/gallery/grape-farm.mp4',
        title: 'Our Grape Farm Tour'
    },
    {
        type: 'video',
        url: '/gallery/grape-farm-14.mp4',
        title: 'Harvesting Process'
    },
    {
        type: 'video',
        url: '/gallery/grape-farm-17.mp4',
        title: 'Farm Activities'
    },
    {
        type: 'video',
        url: '/gallery/grape-farm-7.mp4',
        title: 'Processing Unit'
    },
    {
        type: 'video',
        url: '/gallery/grape-farm-19.mp4',
        title: 'Packaging Process'
    },
    {
        type: 'video',
        url: '/gallery/grape-farm-2.MP4',
        title: 'Farm Overview'
    },
    {
        type: 'video',
        url: '/gallery/grape-farm-1.MP4',
        title: 'Farm Introduction'
    },
    // Images
    {
        type: 'image',
        url: '/gallery/grape-farm-3.jpg',
        title: 'Fresh Grapes'
    },
    {
        type: 'image',
        url: '/gallery/grape-farm-9.jpg',
        title: 'Quality Grapes'
    },
    {
        type: 'image',
        url: '/gallery/grape-farm-10.jpg',
        title: 'Grape Varieties'
    },
    {
        type: 'image',
        url: '/gallery/grape-farm-8.jpg',
        title: 'Farm View'
    },
    {
        type: 'image',
        url: '/gallery/grape-farm-16.jpg',
        title: 'Organic Farming'
    },
    {
        type: 'image',
        url: '/gallery/grape-farm-13.jpg',
        title: 'Sustainable Practices'
    },
    {
        type: 'image',
        url: '/gallery/grape-farm-15.jpg',
        title: 'Farm Scenery'
    },
    {
        type: 'image',
        url: '/gallery/grape-farm-20.jpg',
        title: 'Grape Clusters'
    },
    {
        type: 'image',
        url: '/gallery/grape-farm-18.jpg',
        title: 'Farm Equipment'
    },
    {
        type: 'image',
        url: '/gallery/grape-farm-6.jpg',
        title: 'Grape Processing'
    },
    {
        type: 'image',
        url: '/gallery/grape-farm-11.jpg',
        title: 'Farm Workers'
    },
    {
        type: 'image',
        url: '/gallery/grape-farm-4.jpg',
        title: 'Grape Harvest'
    },
    {
        type: 'image',
        url: '/gallery/grape-farm-5.jpg',
        title: 'Farm Details'
    },
    {
        type: 'image',
        url: '/gallery/grape-farm-12.jpg',
        title: 'Farm Operations'
    },
    {
        type: 'image',
        url: '/gallery/grape-farm-21.jpg',
        title: 'Farm Products'
    }
];

export default function GalleryPage({ params }: { params: Promise<any> }) {
    const resolvedParams = use(params);
    const [selectedMedia, setSelectedMedia] = useState<MediaFile | null>(null);
    const [imageError, setImageError] = useState<{ [key: string]: boolean }>({});
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    useEffect(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
    }, []);

    const handleMediaClick = (media: MediaFile) => {
        setSelectedMedia(media);
    };

    const handleCloseModal = () => {
        setSelectedMedia(null);
    };

    const handleImageError = (url: string) => {
        setImageError(prev => ({ ...prev, [url]: true }));
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gradient-to-b from-white to-[#f8f8f8] py-12"
        >
            <div className="max-w-[1400px] mx-auto px-6">
                <motion.div 
                    variants={fadeInLeft}
                    initial="hidden"
                    animate="visible"
                    className="flex items-center mb-12"
                >
                    <Link 
                        href="/"
                        className="flex items-center space-x-2 text-[#E48A57] hover:text-[#17604F] transition-colors duration-300 group"
                    >
                        <motion.span
                            whileHover={{ x: -5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <FaArrowLeft />
                        </motion.span>
                        <span className="group-hover:underline">Back to Home</span>
                    </Link>
                </motion.div>

                <motion.h1 
                    style={{ y }}
                    variants={fadeInDown}
                    initial="hidden"
                    animate="visible"
                    className="text-[#17604F] text-6xl font-semibold p-4 mb-16 text-center"
                >
                    Full
                    <span className="text-[#E48A57]"> Gallery</span>
                </motion.h1>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={item.url}
                            variants={cardVariants}
                            onHoverStart={() => setHoveredIndex(index)}
                            onHoverEnd={() => setHoveredIndex(null)}
                            className="relative group cursor-pointer"
                            onClick={() => handleMediaClick(item)}
                        >
                            <motion.div 
                                className="relative bg-white rounded-xl shadow-lg overflow-hidden"
                                whileHover={hoverScale}
                            >
                                <motion.div
                                    variants={imageReveal}
                                    animate={{
                                        scale: hoveredIndex === index ? 1.1 : 1,
                                        transition: { duration: 0.5, ease: "easeOut" }
                                    }}
                                    className="relative h-80"
                                >
                                    {item.type === 'image' ? (
                                        <Image 
                                            src={item.url} 
                                            alt={item.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            quality={75}
                                            priority={index < 6}
                                            className="object-cover transition-transform duration-700"
                                            onError={() => handleImageError(item.url)}
                                        />
                                    ) : (
                                        <video 
                                            src={item.url} 
                                            className="w-full h-80 object-cover transition-transform duration-700"
                                            controls
                                            loop
                                            muted
                                            onError={() => handleImageError(item.url)}
                                        />
                                    )}
                                </motion.div>
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    animate={{ 
                                        opacity: hoveredIndex === index ? 1 : 0,
                                        transition: { duration: 0.4 }
                                    }}
                                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
                                >
                                    <motion.div 
                                        variants={textReveal}
                                        initial="hidden"
                                        animate={hoveredIndex === index ? "visible" : "hidden"}
                                        className="absolute bottom-4 left-4 right-4 flex items-center space-x-2"
                                    >
                                        {item.type === 'image' ? (
                                            <FaImage className="text-white" />
                                        ) : (
                                            <FaVideo className="text-white" />
                                        )}
                                        <span className="text-white text-sm font-medium">
                                            {item.title}
                                        </span>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                <AnimatePresence>
                    {selectedMedia && (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.4 }}
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md"
                            onClick={handleCloseModal}
                        >
                            <motion.div 
                                variants={modalVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="relative max-w-4xl w-full mx-4"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <motion.button
                                    variants={buttonVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                    onClick={handleCloseModal}
                                    className="absolute -top-12 right-0 text-white hover:text-[#E48A57] transition-colors duration-300"
                                >
                                    <FaTimes size={32} />
                                </motion.button>
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="bg-white rounded-lg overflow-hidden"
                                >
                                    {selectedMedia.type === 'image' ? (
                                        <motion.div 
                                            variants={imageReveal}
                                            initial="hidden"
                                            animate="visible"
                                            className="relative h-[70vh]"
                                        >
                                            <Image
                                                src={selectedMedia.url}
                                                alt={selectedMedia.title}
                                                fill
                                                sizes="100vw"
                                                quality={90}
                                                priority
                                                className="object-contain"
                                                onError={() => handleImageError(selectedMedia.url)}
                                            />
                                        </motion.div>
                                    ) : (
                                        <motion.video
                                            variants={imageReveal}
                                            initial="hidden"
                                            animate="visible"
                                            src={selectedMedia.url}
                                            className="w-full h-[70vh] object-contain"
                                            controls
                                            autoPlay
                                            loop
                                        />
                                    )}
                                </motion.div>
                                <motion.h3 
                                    variants={textReveal}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{ delay: 0.3 }}
                                    className="text-white text-xl font-semibold mt-4 text-center"
                                >
                                    {selectedMedia.title}
                                </motion.h3>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}
