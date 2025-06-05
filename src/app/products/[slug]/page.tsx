"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const productDetails = {
    "fresh-grapes": {
        title: "Fresh Grapes",
        description: "Our premium quality fresh grapes are carefully cultivated and harvested at the perfect ripeness. We offer various varieties including seedless, red, and black grapes, all grown using sustainable farming practices.",
        features: [
            "Multiple varieties available",
            "Freshly harvested",
            "Quality tested",
            "Sustainably grown",
            "Available in bulk quantities"
        ],
        images: [
            "/gallery/grape-farm-1.MP4",
            "/gallery/grape-farm-2.MP4",
            "/gallery/grape-farm-3.jpg"
        ]
    },
    "organic-raisins": {
        title: "Organic Raisins",
        description: "Our naturally dried organic raisins are made from our finest grape varieties. The drying process preserves the natural sweetness and nutritional value of the grapes.",
        features: [
            "100% organic",
            "No added sugar",
            "Rich in antioxidants",
            "Naturally dried",
            "Premium quality"
        ],
        images: [
            "/gallery/grape-farm-2.MP4",
            "/gallery/grape-farm-3.jpg",
            "/gallery/grape-farm-4.jpg"
        ]
    },
    "grape-juice": {
        title: "Grape Juice",
        description: "Pure, natural grape juice made from our fresh harvest. Our juice is made without any artificial additives or preservatives.",
        features: [
            "100% pure juice",
            "No added sugar",
            "Rich in vitamins",
            "Natural flavor",
            "Available in bulk"
        ],
        images: [
            "/gallery/grape-farm-3.jpg",
            "/gallery/grape-farm-4.jpg",
            "/gallery/grape-farm-5.jpg"
        ]
    },
    "wine-grapes": {
        title: "Wine Grapes",
        description: "Special varieties of grapes cultivated specifically for wine production. Our wine grapes are grown in ideal conditions for optimal flavor development.",
        features: [
            "Premium wine varieties",
            "Perfect ripeness",
            "Ideal sugar content",
            "Consistent quality",
            "Bulk availability"
        ],
        images: [
            "/gallery/grape-farm-4.jpg",
            "/gallery/grape-farm-5.jpg",
            "/gallery/grape-farm-1.MP4"
        ]
    },
    "table-grapes": {
        title: "Table Grapes",
        description: "High-quality table grapes perfect for direct consumption. Our table grapes are selected for their sweetness, size, and shelf life.",
        features: [
            "Sweet and juicy",
            "Long shelf life",
            "Perfect size",
            "Seedless options",
            "Fresh and crisp"
        ],
        images: [
            "/gallery/grape-farm-5.jpg",
            "/gallery/grape-farm-1.MP4",
            "/gallery/grape-farm-2.MP4"
        ]
    },
    "organic-fertilizers": {
        title: "Organic Fertilizers",
        description: "Natural fertilizers made from our farm's organic waste. These fertilizers are perfect for maintaining healthy soil and promoting sustainable farming.",
        features: [
            "100% organic",
            "Rich in nutrients",
            "Environmentally friendly",
            "Improves soil health",
            "Cost-effective"
        ],
        images: [
            "/gallery/grape-farm-1.MP4",
            "/gallery/grape-farm-2.MP4",
            "/gallery/grape-farm-3.jpg"
        ]
    }
};

export default function ProductPage({ params }: { params: { slug: string } }) {
    const product = productDetails[params.slug as keyof typeof productDetails];

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-[#17604F] mb-4">Product Not Found</h1>
                    <Link href="/" className="text-[#E48A57] hover:text-[#17604F] transition-colors duration-300">
                        Return to Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-white to-[#f8f8f8] py-24">
            <div className="max-w-[1200px] mx-auto px-6">
                <Link 
                    href="/" 
                    className="inline-flex items-center text-[#E48A57] hover:text-[#17604F] transition-colors duration-300 mb-8"
                >
                    <FaArrowLeft className="mr-2" />
                    Back to Products
                </Link>

                <h1 className="text-4xl font-bold text-[#17604F] mb-6">{product.title}</h1>
                <p className="text-lg text-gray-600 mb-12">{product.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Media Gallery */}
                    <div className="space-y-6">
                        {product.images.map((image, index) => (
                            <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                                {image.endsWith('.MP4') || image.endsWith('.mp4') ? (
                                    <video 
                                        src={image} 
                                        className="w-full h-full object-cover"
                                        controls
                                    />
                                ) : (
                                    <Image
                                        src={image}
                                        alt={`${product.title} - Image ${index + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Features */}
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h2 className="text-2xl font-bold text-[#17604F] mb-6">Key Features</h2>
                        <ul className="space-y-4">
                            {product.features.map((feature, index) => (
                                <li key={index} className="flex items-center text-gray-600">
                                    <span className="w-2 h-2 bg-[#E48A57] rounded-full mr-3"></span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
} 