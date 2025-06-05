"use client";
import React, { useState, useEffect } from "react";
import { FaImage, FaVideo, FaTimes, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

type MediaFile = {
    type: 'image' | 'video';
    url: string;
    title: string;
};

const SLIDE_DURATION = 5000; // 5 seconds per slide for smoother viewing
const PROGRESS_UPDATE_INTERVAL = 50; // Update progress bar every 50ms

const galleryItems: MediaFile[] = [
    // Row 1 - Farm Overview
    {
        type: 'video',
        url: '/gallery/grape-farm.mp4',
        title: 'Our Grape Farm Tour'
    },
    {
        type: 'image',
        url: '/gallery/grape-farm-3.jpg',
        title: 'Fresh Grapes'
    },
    {
        type: 'video',
        url: '/gallery/grape-farm-14.mp4',
        title: 'Harvesting Process'
    },
    {
        type: 'image',
        url: '/gallery/grape-farm-9.jpg',
        title: 'Quality Grapes'
    },
    // Row 2 - Farm Activities
    {
        type: 'video',
        url: '/gallery/grape-farm-17.mp4',
        title: 'Farm Activities'
    },
    {
        type: 'image',
        url: '/gallery/grape-farm-10.jpg',
        title: 'Grape Varieties'
    },
    {
        type: 'video',
        url: '/gallery/grape-farm-7.mp4',
        title: 'Processing Unit'
    },
    {
        type: 'image',
        url: '/gallery/grape-farm-8.jpg',
        title: 'Farm View'
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    },
    hover: {
        scale: 1.05,
        transition: {
            duration: 0.3
        }
    }
};

const Gallery = () => {
    const [selectedMedia, setSelectedMedia] = useState<MediaFile | null>(null);
    const [currentIndexes, setCurrentIndexes] = useState([0, 0]);
    const [progress, setProgress] = useState([0, 0]);

    const handleMediaClick = (media: MediaFile) => {
        setSelectedMedia(media);
    };

    const handleCloseModal = () => {
        setSelectedMedia(null);
    };

    const handleNext = (rowIndex: number) => {
        setCurrentIndexes(prev => {
            const newIndexes = [...prev];
            newIndexes[rowIndex] = (newIndexes[rowIndex] + 1) % 4;
            return newIndexes;
        });
        setProgress(prev => {
            const newProgress = [...prev];
            newProgress[rowIndex] = 0;
            return newProgress;
        });
    };

    const getRowItems = (rowIndex: number) => {
        const items = galleryItems.slice(rowIndex * 4, (rowIndex + 1) * 4);
        // Create a longer loop for smoother transitions
        return [...items, ...items, ...items];
    };

    // Progress bar update
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                return prev.map((p, index) => {
                    const newProgress = p + (PROGRESS_UPDATE_INTERVAL / SLIDE_DURATION) * 100;
                    if (newProgress >= 100) {
                        handleNext(index);
                        return 0;
                    }
                    return newProgress;
                });
            });
        }, PROGRESS_UPDATE_INTERVAL);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-full py-24 bg-gradient-to-b from-white to-[#f8f8f8]" id="gallery">
            <div className="max-w-[1200px] mx-auto px-6">
                <div className="flex justify-between items-center mb-16">
                    <motion.h1 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-[#17604F] text-6xl font-semibold p-4 text-center"
                    >
                        Our
                        <span className="text-[#E48A57]"> Gallery</span>
                    </motion.h1>
                    <Link 
                        href="/gallery"
                        className="flex items-center space-x-2 text-[#E48A57] hover:text-[#17604F] transition-colors duration-300"
                    >
                        <span>View Full Gallery</span>
                        <FaArrowRight />
                    </Link>
                </div>

                {/* Gallery Rows */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-12"
                >
                    {[0, 1].map((rowIndex) => (
                        <div key={rowIndex} className="relative overflow-hidden">
                            <motion.div 
                                className="flex gap-8"
                                animate={{
                                    x: `-${currentIndexes[rowIndex] * 25}%`
                                }}
                                transition={{
                                    type: "tween",
                                    duration: 0.8,
                                    ease: [0.4, 0.0, 0.2, 1]
                                }}
                            >
                                {getRowItems(rowIndex).map((item, index) => (
                                    <motion.div
                                        key={`${item.url}-${index}`}
                                        className="flex-shrink-0 w-full md:w-1/2 lg:w-1/4"
                                    >
                                        <motion.div
                                            variants={itemVariants}
                                            whileHover="hover"
                                            className="relative group cursor-pointer"
                                            onClick={() => handleMediaClick(item)}
                                        >
                                            <div className="relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:shadow-2xl">
                                                {item.type === 'image' ? (
                                                    <div className="relative h-64">
                                                        <Image 
                                                            src={item.url} 
                                                            alt={item.title}
                                                            fill
                                                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                                                        />
                                                    </div>
                                                ) : (
                                                    <video 
                                                        src={item.url} 
                                                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                                                        controls
                                                        loop
                                                        muted
                                                    />
                                                )}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                    <div className="absolute bottom-4 left-4 right-4 flex items-center space-x-2">
                                                        {item.type === 'image' ? (
                                                            <FaImage className="text-white" />
                                                        ) : (
                                                            <FaVideo className="text-white" />
                                                        )}
                                                        <span className="text-white text-sm font-medium">
                                                            {item.title}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                ))}
                            </motion.div>
                            
                            {/* Progress Bar */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-[#E48A57]"
                                    initial={{ width: "0%" }}
                                    animate={{ width: `${progress[rowIndex]}%` }}
                                    transition={{ 
                                        duration: PROGRESS_UPDATE_INTERVAL / 1000,
                                        ease: "linear"
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Modal */}
                {selectedMedia && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
                        onClick={handleCloseModal}
                    >
                        <motion.div 
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className="relative max-w-4xl w-full mx-4"
                        >
                            <button
                                onClick={handleCloseModal}
                                className="absolute -top-12 right-0 text-white hover:text-[#E48A57] transition-colors duration-300"
                            >
                                <FaTimes size={32} />
                            </button>
                            <div className="bg-white rounded-lg overflow-hidden">
                                {selectedMedia.type === 'image' ? (
                                    <div className="relative h-[70vh]">
                                        <Image
                                            src={selectedMedia.url}
                                            alt={selectedMedia.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                ) : (
                                    <video
                                        src={selectedMedia.url}
                                        className="w-full h-[70vh] object-contain"
                                        controls
                                        autoPlay
                                        loop
                                    />
                                )}
                            </div>
                            <h3 className="text-white text-xl font-semibold mt-4 text-center">
                                {selectedMedia.title}
                            </h3>
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Gallery; 