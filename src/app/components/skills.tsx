import React from "react"
import { FaLeaf, FaWater, FaSun, FaSeedling, FaTruck, FaBoxOpen, FaCertificate, FaHandHoldingHeart } from 'react-icons/fa';

const farmingFeatures = [
    {
        icon: <FaLeaf size={60} className="text-[#E48A57]" />,
        title: "Organic Farming",
        description: "100% natural farming methods without synthetic pesticides"
    },
    {
        icon: <FaWater size={60} className="text-[#E48A57]" />,
        title: "Water Management",
        description: "Efficient irrigation systems and water conservation"
    },
    {
        icon: <FaSun size={60} className="text-[#E48A57]" />,
        title: "Sun-Ripened",
        description: "Grapes naturally ripened under optimal sunlight"
    },
    {
        icon: <FaSeedling size={60} className="text-[#E48A57]" />,
        title: "Quality Varieties",
        description: "Premium grape varieties carefully selected"
    },
    {
        icon: <FaTruck size={60} className="text-[#E48A57]" />,
        title: "Fresh Delivery",
        description: "Quick delivery to maintain freshness"
    },
    {
        icon: <FaBoxOpen size={60} className="text-[#E48A57]" />,
        title: "Premium Packaging",
        description: "Careful packaging to preserve quality"
    },
    {
        icon: <FaCertificate size={60} className="text-[#E48A57]" />,
        title: "Certified Quality",
        description: "ISO certified farming practices"
    },
    {
        icon: <FaHandHoldingHeart size={60} className="text-[#E48A57]" />,
        title: "Customer Care",
        description: "Dedicated support for our valued customers"
    }
]

const Skills = () =>{
    return (
        <div className="max-w-[1200px] mx-auto py-16 bg-gradient-to-b from-white to-[#f8f8f8]" id="features"> 
            <h1 className="text-[#17604F] text-6xl max-w-[320px] mx-auto font-semibold p-4 mb-4 text-center">Our
                <span className="text-[#E48A57]"> Features</span>
            </h1>
            <div className="px-6 md:p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {farmingFeatures.map((feature, index) => (
                    <div
                        key={index}
                        className="relative bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#17604F] to-[#1a6b5a] opacity-90"></div>
                        <div className="relative p-6 flex flex-col items-center text-center">
                            <div className="bg-white/10 p-4 rounded-lg mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                            <p className="text-white text-sm">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills