import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useViewportScroll,
  useTransform,
} from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  HiOutlineArrowRight,
  HiCode,
  HiLightningBolt,
  HiSparkles,
  HiCube,
} from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";
import "./hero.css";
import AICodeAnalyzer from "./AICodeAnalyzer";
import QuantumProject from "./QuantumProject";
import RocketIcons from "./RocketIcons";

function Hero() {
  const [scanning, setScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const { scrollYProgress } = useViewportScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
    });

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
      className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950 to-purple-950  to-purple-950 text-white overflow-hidden relative"
    >
      {/* Animated background particles */}
      <ParticleBackground />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="min-h-screen text-white overflow-hidden relative mt-32 mb-10 rounded-md"
        >
          <ParticleBackground />

          <div className="container mx-auto px-4 py-16 relative z-10 flex flex-col items-center justify-center min-h-screen">
            <motion.div
              {...fadeIn}
              className="text-center mb-16"
              data-aos="fade-up"
            >
              <motion.h1
                className="text-5xl md:text-6xl font-bold mb-6 text-white"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Unleash the power of AI to decode any GitHub repository
                instantly.
              </motion.h1>
              <motion.p
                className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8"
                {...fadeIn}
              >
                <span className="coolfont font-bold text-cyan-300">DeCoder </span>
                is free to get started with.
              </motion.p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-blue-600 rounded-full text-xl font-bold transition duration-300 ease-in-out transform hover:shadow-lg"
              >
                Explore Now
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        <FeatureGrid />

        <div className="my-20"></div>
        <AICodeAnalyzer />
        <div className="my-20"></div>
        <QuantumProject />

        <SocialLinks />
      </div>

      <ScrollIndicator />
    </motion.main>
  );
}

function ParticleBackground() {
  return (
    <>
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
    </>
  );
}

function ExploreButton() {
  return (
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
  );
}

function FeatureGrid() {
  const features = [
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
  ];

  return (
    <motion.div
      className="relative max-w-5xl mx-auto"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 blur-3xl opacity-10 rounded-3xl"></div>
      <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-gray-800/50 rounded-2xl hover:bg-gray-700/50 transition-colors duration-300"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <Icon className="text-6xl mb-4 mx-auto text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-400">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function SocialLinks() {
  const socialLinks = [
    { Icon: FaLinkedin, href: "https://www.linkedin.com/in/mayankyadav17/" },
    { Icon: FaGithub, href: "https://github.com/mayankyadav1711" },
    { Icon: FaTwitter, href: "https://x.com/mayankyadav_17" },
    {
      Icon: FaYoutube,
      href: "https://www.youtube.com/channel/UCIrpCdKTh86NLvUylLlvCQ",
    },
  ];

  return (
    <motion.div
      className="flex justify-center space-x-8 mt-16"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      {socialLinks.map(({ Icon, href }, index) => (
        <motion.a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-white transition-transform transform hover:scale-110"
        >
          <Icon />
        </motion.a>
      ))}
    </motion.div>
  );
}

function ScrollIndicator() {
  const { scrollYProgress } = useViewportScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 h-1 bg-blue-500 z-50"
      style={{ scaleX, transformOrigin: "0%" }}
    />
  );
}

export default Hero;
