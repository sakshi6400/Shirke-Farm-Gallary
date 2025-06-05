"use client";
import Image from "next/image";
import cursor from "../assets/icon1.png";
import lightning from "../assets/icon2.png";
import { motion } from 'framer-motion';
import grape from "../assets/grape.png";
import { 
    fadeInUp, 
    fadeInDown, 
    fadeInLeft,
    textReveal,
    imageReveal
} from '@/app/utils/animations';

const Hero = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-24 relative overflow-clip bg-white" 
      id="home"
    >
      <div className="absolute rounded-[50%] w-[3000px] h-[1300px] top-[550px] left-[50%] -translate-x-1/2 bg-[radial-gradient(closest-side,#000_80%,#17604F)]">
      </div>
      <div className="relative">
        <motion.div 
          variants={fadeInDown}
          initial="hidden"
          animate="visible"
          className="text-8xl font-bold text-center"
        >
          <h1 className="text-[#17604F]">
            Welcome, to Our
          </h1>
          <h1 className="text-[#E48A57]">Farm</h1>
        </motion.div>

        <motion.div 
          variants={fadeInLeft}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="hidden md:block absolute left-[120px] top-[150px]" 
          drag
        >
          <Image src={cursor} height="170" width="170" alt="cursor" className="" draggable="false" />
        </motion.div>
        <motion.div 
          variants={fadeInLeft}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="hidden md:block absolute right-[200px] top-[20px]" 
          drag
        >
          <Image src={lightning} height="120" width="120" alt="cursor" className="" draggable="false" />
        </motion.div>

        <motion.p 
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="text-center text-xl max-w-[500px] mx-auto mt-8 text-[#17604F]"
        >
          We are grape farmers 30 years ago we started to grow grapes.
        </motion.p> 

        <motion.div
          variants={imageReveal}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        >
          <Image src={grape} alt="profile picture" className="h-[255px] w-[255px] mx-auto mt-50px" />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Hero;
