// SkyBubbleWave.jsx
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

// Simple Sky Bubble Wave Component
export const SkyBubbleWave = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const newBubbles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      size: Math.random() * 60 + 20,
      left: Math.random() * 100,
      animationDuration: Math.random() * 40 + 20,
      animationDelay: Math.random() * 10,
      opacity: Math.random() * 0.7 + 0.3,
    }));
    setBubbles(newBubbles);
  }, []);

  return (
    <div style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      overflow: "hidden",
      zIndex: 1,
      background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
    }}>
      {/* Floating Bubbles */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}>
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            style={{
              position: "absolute",
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: `${bubble.left}%`,
              borderRadius: "50%",
              background: "radial-gradient(circle at 30% 30%, rgba(100, 200, 255, 0.8), rgba(100, 100, 255, 0.3))",
              boxShadow: "0 0 40px rgba(100, 200, 255, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.3)",
              filter: "blur(1px)",
              pointerEvents: "none",
            }}
            animate={{
              y: [0, -300, 0],
              x: [0, Math.sin(bubble.id) * 50, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: bubble.animationDuration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: bubble.animationDelay,
            }}
          />
        ))}
      </div>

      {/* Wave Layer */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "200%",
        height: "200px",
        overflow: "hidden",
      }}>
        <motion.div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.2), transparent)",
            borderRadius: "50%",
            filter: "blur(10px)",
          }}
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </div>
  );
};

// Advanced Sky Bubble Wave Component
export const AdvancedSkyBubbleWave = ({ intensity = 1, speed = 1, colorTheme = "blue" }) => {
  const [bubbles, setBubbles] = useState([]);
  const containerRef = useRef(null);

  const colorThemes = {
    blue: {
      primary: "rgba(59, 130, 246, ",
      secondary: "rgba(139, 92, 246, ",
    },
    purple: {
      primary: "rgba(139, 92, 246, ",
      secondary: "rgba(217, 70, 239, ",
    },
    teal: {
      primary: "rgba(20, 184, 166, ",
      secondary: "rgba(56, 189, 248, ",
    },
  };

  const theme = colorThemes[colorTheme] || colorThemes.blue;

  useEffect(() => {
    const bubbleCount = Math.floor(30 * intensity);
    const newBubbles = Array.from({ length: bubbleCount }, (_, i) => ({
      id: i,
      size: Math.random() * 80 + 20,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDuration: (Math.random() * 40 + 20) / speed,
      animationDelay: Math.random() * 10,
      opacity: Math.random() * 0.5 + 0.3,
    }));
    setBubbles(newBubbles);
  }, [intensity, speed]);

  return (
    <div ref={containerRef} style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      overflow: "hidden",
      zIndex: 0,
      pointerEvents: "none",
      background: `linear-gradient(135deg, #0f172a 0%, #1e293b 100%)`,
    }}>
      {/* Bubbles */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}>
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            style={{
              position: "absolute",
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: `${bubble.left}%`,
              top: `${bubble.top}%`,
              borderRadius: "50%",
              background: `radial-gradient(circle at 30% 30%, ${theme.primary}${bubble.opacity} 0%, ${theme.secondary}${bubble.opacity * 0.5} 60%)`,
              boxShadow: `0 0 ${bubble.size / 2}px ${theme.primary}${bubble.opacity})`,
              filter: "blur(2px)",
              pointerEvents: "none",
            }}
            animate={{
              y: [0, -Math.random() * 300 - 100, 0],
              x: [0, Math.sin(bubble.id) * 100, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: bubble.animationDuration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: bubble.animationDelay,
            }}
          />
        ))}
      </div>

      {/* Waves */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "200%",
        height: "300px",
        pointerEvents: "none",
        overflow: "hidden",
      }}>
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            style={{
              position: "absolute",
              left: 0,
              bottom: 0,
              width: "100%",
              height: `${200 - i * 50}px`,
              background: `linear-gradient(90deg, transparent, ${theme.primary}${0.3 - i * 0.1}, transparent)`,
              borderRadius: "50%",
              filter: "blur(10px)",
            }}
            animate={{
              x: i % 2 === 0 ? ["-100%", "100%"] : ["100%", "-100%"],
            }}
            transition={{
              duration: (20 + i * 5) / speed,
              repeat: Infinity,
              ease: "linear",
              delay: i * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Demo Component with Controls
export const SkyBubbleWaveDemo = () => {
  const [intensity, setIntensity] = useState(1);
  const [speed, setSpeed] = useState(1);
  const [theme, setTheme] = useState("blue");

  return (
    <div style={{
      position: "relative",
      width: "100%",
      height: "500px",
      borderRadius: "10px",
      overflow: "hidden",
      margin: "20px 0",
    }}>
      <AdvancedSkyBubbleWave 
        intensity={intensity} 
        speed={speed} 
        colorTheme={theme} 
      />
      
      {/* Controls */}
      <div style={{
        position: "absolute",
        bottom: "20px",
        left: "20px",
        zIndex: 1000,
        background: "rgba(0, 0, 0, 0.7)",
        padding: "15px",
        borderRadius: "10px",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        minWidth: "250px",
      }}>
        <div style={{ marginBottom: "15px" }}>
          <label style={{
            color: "#fff",
            fontSize: "14px",
            marginBottom: "5px",
            display: "block",
          }}>
            Intensity: {intensity.toFixed(1)}
          </label>
          <input
            type="range"
            min="0.1"
            max="3"
            step="0.1"
            value={intensity}
            onChange={(e) => setIntensity(parseFloat(e.target.value))}
            style={{
              width: "100%",
              height: "6px",
              borderRadius: "3px",
              background: "linear-gradient(90deg, #2563eb, #7c3aed)",
              outline: "none",
              appearance: "none",
            }}
          />
        </div>
        
        <div style={{ marginBottom: "15px" }}>
          <label style={{
            color: "#fff",
            fontSize: "14px",
            marginBottom: "5px",
            display: "block",
          }}>
            Speed: {speed.toFixed(1)}
          </label>
          <input
            type="range"
            min="0.1"
            max="3"
            step="0.1"
            value={speed}
            onChange={(e) => setSpeed(parseFloat(e.target.value))}
            style={{
              width: "100%",
              height: "6px",
              borderRadius: "3px",
              background: "linear-gradient(90deg, #2563eb, #7c3aed)",
              outline: "none",
              appearance: "none",
            }}
          />
        </div>
        
        <div>
          <label style={{
            color: "#fff",
            fontSize: "14px",
            marginBottom: "5px",
            display: "block",
          }}>
            Color Theme
          </label>
          <div style={{ display: "flex", gap: "10px" }}>
            {["blue", "purple", "teal"].map((color) => (
              <button
                key={color}
                onClick={() => setTheme(color)}
                style={{
                  flex: 1,
                  padding: "8px",
                  borderRadius: "5px",
                  background: theme === color 
                    ? color === "blue" ? "#2563eb" 
                    : color === "purple" ? "#7c3aed" 
                    : "#0d9488"
                    : "rgba(255, 255, 255, 0.1)",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "12px",
                  textTransform: "capitalize",
                }}
              >
                {color}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Default export
export default SkyBubbleWave;