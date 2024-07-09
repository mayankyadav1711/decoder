import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import {
  HiOutlineArrowRight,
  HiOutlineLightningBolt,
  HiCode,
  HiLightningBolt,
  HiSparkles,
  HiCube,
} from "react-icons/hi";
import "./hero.css";
import AICodeAnalyzer from "./AICodeAnalyzer";
import QuantumProject from "./QuantumProject";
import NeuralNexus from "./NeuralNexus";
function Hero() {
  const [scanning, setScanning] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    if (scanning) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 2));
      }, 50);
    }
    return () => clearInterval(interval);
  }, [scanning]);
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950 to-purple-950 text-white flex items-center justify-center overflow-hidden relative"
    >
      {/* Animated background particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-500 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{ duration: 15 + Math.random() * 25, repeat: Infinity }}
        />
      ))}

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div {...fadeIn} className="text-center mb-12">
          <motion.h1
            className="text-7xl md:text-8xl font-extrabold mb-6 text-gray-300 mt-32  [text-shadow:_2px_2px_4px_rgba(0,0,0,0.4),_-2px_-2px_4px_rgba(255,255,255,0.2)]"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              textShadow:
                "0 0 80px rgba(192, 219, 255, 0.3), 0 0 32px rgba(65, 120, 255, 0.24)",
            }}
          >
            Decode Your Code
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto"
            {...fadeIn}
          >
            Unleash the power of AI to decode any GitHub repository instantly.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex justify-center mb-36"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(59, 130, 246, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-xl font-bold transition duration-300 ease-in-out transform hover:shadow-lg hover:shadow-blue-500/50 flex items-center space-x-3"
          >
            <span>Explore Now</span>
            <HiOutlineArrowRight className="text-2xl" />
          </motion.button>
        </motion.div>

        <motion.div
          className="relative max-w-5xl mx-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 blur-3xl opacity-10 rounded-3xl"></div>
          <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: HiCode,
                  title: "AI Analysis",
                  description: "Instant insights into any codebase",
                },
                {
                  icon: HiLightningBolt,
                  title: "Lightning Fast",
                  description: "Analyze repositories in seconds",
                },
                {
                  icon: HiSparkles,
                  title: "Skill Boost",
                  description: "Elevate your coding prowess",
                },
                {
                  icon: HiCube,
                  title: "3D Visualization",
                  description: "See your code in a new dimension",
                },
              ].map(({ icon: Icon, title, description }, index) => (
                <motion.div
                  key={index}
                  className="text-center p-6 bg-gray-800/50 rounded-2xl hover:bg-gray-700/50 transition-colors duration-300"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Icon className="text-6xl mb-4 mx-auto text-blue-400" />
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-gray-400">{description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="my-20"></div>
        <AICodeAnalyzer />
        <div className="my-20"></div>
        <QuantumProject />
   
        <motion.div
          className="flex justify-center space-x-8 mt-16"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {[
            {
              Icon: FaLinkedin,
              href: "https://www.linkedin.com/in/mayankyadav17/",
            },
            { Icon: FaGithub, href: "https://github.com/mayankyadav1711" },
            { Icon: FaTwitter, href: "https://x.com/mayankyadav_17" },
            {
              Icon: FaYoutube,
              href: "https://www.youtube.com/channel/UCIrpCdKKTh86NLvUylLlvCQ",
            },
          ].map(({ Icon, href }, index) => (
            <motion.a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 5, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon className="text-4xl" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.main>
  );
}

export default Hero;
