import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaAtom,
  FaChartLine,
  FaCode,
  FaCog,
  FaDatabase,
  FaLock,
  FaMicrochip,
  FaNetworkWired,
} from "react-icons/fa";

const QuantumProject = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [progress, setProgress] = useState(0);

  const projects = [
    {
      icon: FaAtom,
      color: "#4A90E2",
      name: "Quantum Entanglement Simulator",
      description:
        "Simulating quantum entanglement for secure communication protocols.",
    },
    {
      icon: FaChartLine,
      color: "#50E3C2",
      name: "Quantum Financial Modeling",
      description:
        "Applying quantum algorithms to predict market trends and optimize portfolios.",
    },
    {
      icon: FaCode,
      color: "#B8E986",
      name: "Quantum Error Correction",
      description:
        "Developing advanced error correction codes for quantum computers.",
    },
    {
      icon: FaCog,
      color: "#F5A623",
      name: "Quantum Annealing Optimizer",
      description:
        "Solving complex optimization problems using quantum annealing techniques.",
    },
    {
      icon: FaDatabase,
      color: "#FF6B6B",
      name: "Quantum Database Search",
      description:
        "Implementing Grovers algorithm for faster database queries.",
    },
    {
      icon: FaLock,
      color: "#7ED321",
      name: "Post-Quantum Cryptography",
      description:
        "Creating encryption methods resistant to quantum computer attacks.",
    },
    {
      icon: FaMicrochip,
      color: "#BD10E0",
      name: "Quantum Chip Design",
      description:
        "Designing next-generation quantum processors with increased qubit stability.",
    },
    {
      icon: FaNetworkWired,
      color: "#9013FE",
      name: "Quantum Internet Protocol",
      description:
        "Developing protocols for a future quantum internet infrastructure.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          setActiveProject(
            (prevProject) => (prevProject + 1) % projects.length
          );
          return 0;
        }
        return prevProgress + 1;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-gray-800">
      {" "}
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-800"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="p-8">
            <h2 className="text-4xl font-extrabold text-white justify-center flex mb-6">
              Project Analyzer{" "}
            </h2>{" "}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <motion.div
                  className="bg-gray-900 rounded-xl p-6 h-96 relative overflow-hidden"
                  key={activeProject}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="text-9xl text-blue-500 opacity-10"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      {React.createElement(projects[activeProject].icon)}
                    </motion.div>
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-blue-400 mb-4">
                      {projects[activeProject].name}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {projects[activeProject].description}
                    </p>
                    <div className="mt-8">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-blue-400">
                          Progress
                        </span>
                        <span className="text-sm font-medium text-blue-400">
                          {progress}%
                        </span>
                      </div>
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-700">
                        <motion.div
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                          style={{ width: `${progress}%` }}
                          initial={{ width: "0%" }}
                          animate={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    className={`bg-gray-900 rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer ${
                      index === activeProject ? "border-2 border-blue-500" : ""
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveProject(index)}
                  >
                    <motion.div
                      className="text-4xl mb-2"
                      style={{ color: project.color }}
                      animate={{
                        rotate: index === activeProject ? [0, 360] : 0,
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <project.icon />
                    </motion.div>
                    <h4 className="text-sm font-medium text-center text-gray-300">
                      {project.name}
                    </h4>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default QuantumProject;
