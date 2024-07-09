import { FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";

function RocketIcons() {
    return (
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <motion.div
          initial={{ y: 0 }}
          animate={{ 
            y: [-10, 10],
          }}
          transition={{ 
            y: { yoyo: Infinity, duration: 2, ease: "easeInOut" },
          }}
          className="relative"
        >
          <motion.div
            className="absolute inset-0 blur-xl opacity-50"
            style={{ 
              background: "radial-gradient(circle, #ff4500, #ff8c00, #ffd700)", 
              borderRadius: "50%" 
            }}
          />
          <motion.div
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaRocket 
              className="text-6xl filter drop-shadow-lg"
              style={{ 
                background: "linear-gradient(135deg, #ff4500, #ff8c00, #ffd700, #ff1493, #00bfff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }} 
            />
          </motion.div>
  
        </motion.div>
      </div>
    );
  }
  

  export default RocketIcons;   