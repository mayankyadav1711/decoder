import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaRobot,
  FaCode,
  FaBrain,
  FaLightbulb,
  FaServer,
  FaNetworkWired,
  FaShieldAlt,
  FaRocket,
} from "react-icons/fa";

const AICodeAnalyzer = () => {
  const [analyzing, setAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState(0);
  const [insights, setInsights] = useState([]);

  const phases = [
    { icon: FaCode, color: "#4A90E2", text: "Parsing Code" },
    { icon: FaRobot, color: "#50E3C2", text: "AI Analysis" },
    { icon: FaBrain, color: "#B8E986", text: "Neural Processing" },
    { icon: FaServer, color: "#F5A623", text: "Database Query" },
    { icon: FaNetworkWired, color: "#FF6B6B", text: "Library Check" },
    { icon: FaShieldAlt, color: "#7ED321", text: "Security Scan" },
    { icon: FaLightbulb, color: "#BD10E0", text: "Insight Generation" },
    { icon: FaRocket, color: "#9013FE", text: "Optimization" },
  ];

  const codeSnippet = `
function quantumAnalyze(codebase) {
  const ai = new QuantumAI(codebase);
  
  const [syntaxTree, semanticGraph] = ai.initializeAnalysis();
  
  const neuralResult = ai.deepLearningProcess(semanticGraph);
  
  const securityReport = ai.quantumSecurityAudit();
  
  const optimizations = ai.generateQuantumOptimizations(
    syntaxTree,
    neuralResult,
    securityReport
  );
  
  return {
    insights: neuralResult.quantumInsights,
    vulnerabilities: securityReport.quantumVulnerabilities,
    optimizations: optimizations.quantumSuggestions,
  };
}
  `.trim();

  useEffect(() => {
    let interval;
    if (analyzing) {
      interval = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + 0.2;
          if (newProgress >= 100) {
            clearInterval(interval);
            setAnalyzing(false);
            return 100;
          }
          setPhase(Math.floor((newProgress / 100) * phases.length));
          if (Math.random() > 0.7) {
            setInsights((prev) => [...prev, generateInsight()]);
          }
          return newProgress;
        });
      }, 50);
    } else {
      setProgress(0);
      setPhase(0);
      setInsights([]);
    }
    return () => clearInterval(interval);
  }, [analyzing]);

  const handleClick = () => {
    setAnalyzing(!analyzing);
  };

  const generateInsight = () => {
    const insights = [
      "Quantum entanglement detected in parallel processes",
      "Suggested refactoring: Convert to quantum superposition",
      "Unused qubit 'q7' found in quantum circuit",
      "Security risk: Potential quantum cryptography vulnerability",
      "Quantum speedup opportunity in search algorithm",
      "Recommend implementing quantum error correction",
      "Quantum coherence optimization in modules A and B",
      "Outdated quantum library: Upgrade to QuantumLib v3.0",
    ];
    return insights[Math.floor(Math.random() * insights.length)];
  };

  return (
    <>
      <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-gray-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border-gray-800"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="p-6">
              <h2 className="text-4xl font-extrabold text-white justify-center flex mb-6">
                 Code Analyzer{" "}
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-gray-900 rounded-xl p-4 h-96 overflow-hidden relative">
                    <pre className="text-xs text-green-400 font-mono">
                      {codeSnippet}
                    </pre>
                    {analyzing && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"
                        initial={{ y: "-100%" }}
                        animate={{ y: "100%" }}
                        transition={{
                          repeat: Infinity,
                          repeatType: "loop",
                          duration: 2,
                          ease: "linear",
                        }}
                      />
                    )}
                  </div>
                  <div className="bg-gray-900 rounded-xl p-4 h-40 overflow-y-auto">
                    <h3 className="text-lg font-semibold text-blue-400 mb-2">
                      Quantum Insights:
                    </h3>
                    <AnimatePresence>
                      {insights.map((insight, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          transition={{ duration: 0.5 }}
                          className="text-sm text-gray-300 mb-1"
                        >
                          • {insight}
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-gray-900 rounded-xl p-6 h-96 relative overflow-hidden">
                    <h3 className="text-lg font-semibold text-blue-400 mb-4">
                      Quantum Analysis Progress
                    </h3>
                    <div className="relative pt-1">
                      <div className="flex mb-2 items-center justify-between">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                            {phases[phase].text}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-semibold inline-block text-blue-400">
                            {progress.toFixed(1)}%
                          </span>
                        </div>
                      </div>
                      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-700">
                        <motion.div
                          style={{ width: `${progress}%` }}
                          className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
                          initial={{ width: "0%" }}
                          animate={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 mt-8">
                      {phases.map((p, index) => (
                        <motion.div
                          key={index}
                          className={`text-center ${
                            index <= phase ? "opacity-100" : "opacity-50"
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <motion.div
                            className="inline-block p-3 rounded-full"
                            style={{ backgroundColor: p.color }}
                            animate={{
                              boxShadow:
                                analyzing && index === phase
                                  ? [
                                      "0 0 0 0 rgba(59, 130, 246, 0)",
                                      "0 0 0 10px rgba(59, 130, 246, 0)",
                                    ]
                                  : "0 0 0 0 rgba(59, 130, 246, 0)",
                            }}
                            transition={{
                              repeat: Infinity,
                              duration: 1,
                            }}
                          >
                            <p.icon className="text-gray-900" size={24} />
                          </motion.div>
                          <p className="mt-2 text-xs font-medium text-gray-300">
                            {p.text}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <motion.button
                    className={`w-full py-3 px-6 text-white font-semibold rounded-xl shadow-lg ${
                      analyzing
                        ? "bg-red-600 hover:bg-red-700"
                        : "bg-blue-600 hover:bg-blue-700"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleClick}
                  >
                    {analyzing
                      ? "Stop Quantum Analysis"
                      : "Start Quantum Analysis"}
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AICodeAnalyzer;
