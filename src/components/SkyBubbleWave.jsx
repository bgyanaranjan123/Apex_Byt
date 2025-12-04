import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const SkyBubbleWave = () => {
  const [bubbles, setBubbles] = useState([]);

  // Generate bubbles on mount
  useEffect(() => {
    const newBubbles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      size: Math.random() * 60 + 20,
      left: Math.random() * 100,
      animationDuration: Math.random() * 40 + 20,
      animationDelay: Math.random() * 10,
      opacity: Math.random() * 0.7 + 0.3,
      waveOffset: Math.random() * 100,
    }));
    setBubbles(newBubbles);
  }, []);

  return (
    <div style={styles.container}>
      {/* Floating Bubbles */}
      <div style={styles.bubblesContainer}>
        {bubbles.map((bubble) => (
          <motion.div
            key={bubble.id}
            style={{
              ...styles.bubble,
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: `${bubble.left}%`,
              opacity: bubble.opacity,
              background: `radial-gradient(circle at 30% 30%, 
                rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 155}, 255, 0.8),
                rgba(${Math.random() * 100 + 155}, 100, 255, 0.3))`,
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

      {/* Wave Layer 1 */}
      <div style={styles.waveContainer}>
        <svg
          style={styles.wave}
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            style={styles.wavePath1}
            animate={{
              d: [
                "M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z",
                "M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z",
                "M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z",
              ],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>

      {/* Wave Layer 2 */}
      <div style={styles.waveContainer2}>
        <svg
          style={styles.wave}
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            style={styles.wavePath2}
            animate={{
              d: [
                "M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z",
                "M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z",
              ],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </svg>
      </div>

      {/* Wave Layer 3 */}
      <div style={styles.waveContainer3}>
        <svg
          style={styles.wave}
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            style={styles.wavePath3}
            animate={{
              d: [
                "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",
                "M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z",
                "M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z",
              ],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </svg>
      </div>

      {/* Sparkling Stars */}
      <div style={styles.starsContainer}>
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={`star-${i}`}
            style={{
              ...styles.star,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 1,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Moving Clouds */}
      <div style={styles.cloudsContainer}>
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={`cloud-${i}`}
            style={{
              ...styles.cloud,
              top: `${20 + i * 15}%`,
              width: `${200 + i * 50}px`,
              height: `${80 + i * 20}px`,
              opacity: 0.3 + i * 0.1,
              filter: `blur(${10 + i * 5}px)`,
            }}
            animate={{
              x: [0, 100, 0],
            }}
            transition={{
              duration: 60 + i * 20,
              repeat: Infinity,
              ease: "linear",
              delay: i * 10,
            }}
          >
            <div style={styles.cloudShape} />
            <div style={styles.cloudShape2} />
            <div style={styles.cloudShape3} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Inline Styles
const styles = {
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    zIndex: 1,
    background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
  },
  bubblesContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
  },
  bubble: {
    position: "absolute",
    borderRadius: "50%",
    background: "radial-gradient(circle at 30% 30%, rgba(100, 200, 255, 0.8), rgba(100, 100, 255, 0.3))",
    boxShadow: "0 0 40px rgba(100, 200, 255, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.3)",
    filter: "blur(1px)",
    pointerEvents: "none",
  },
  waveContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "200px",
    overflow: "hidden",
  },
  waveContainer2: {
    position: "absolute",
    bottom: "50px",
    left: 0,
    width: "100%",
    height: "150px",
    overflow: "hidden",
  },
  waveContainer3: {
    position: "absolute",
    bottom: "100px",
    left: 0,
    width: "100%",
    height: "100px",
    overflow: "hidden",
  },
  wave: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  wavePath1: {
    fill: "rgba(59, 130, 246, 0.2)",
    filter: "url(#glow)",
  },
  wavePath2: {
    fill: "rgba(139, 92, 246, 0.15)",
    filter: "url(#glow)",
  },
  wavePath3: {
    fill: "rgial-gradient(circle, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.05))",
  },
  starsContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
  },
  star: {
    position: "absolute",
    backgroundColor: "#ffffff",
    borderRadius: "50%",
    boxShadow: "0 0 10px 2px rgba(255, 255, 255, 0.8)",
    pointerEvents: "none",
  },
  cloudsContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    pointerEvents: "none",
  },
  cloud: {
    position: "absolute",
    background: "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))",
    borderRadius: "50%",
    pointerEvents: "none",
  },
  cloudShape: {
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.15), transparent)",
    borderRadius: "50%",
  },
  cloudShape2: {
    position: "absolute",
    width: "60%",
    height: "60%",
    top: "-20%",
    left: "20%",
    background: "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1), transparent)",
    borderRadius: "50%",
  },
  cloudShape3: {
    position: "absolute",
    width: "40%",
    height: "40%",
    top: "10%",
    right: "10%",
    background: "radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1), transparent)",
    borderRadius: "50%",
  },
};

export default SkyBubbleWave;