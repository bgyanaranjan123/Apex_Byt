import React from 'react';
import { motion } from 'framer-motion';

const MagicalSkyBackground = () => {
  // Create twinkling stars
  const stars = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 4 + 2,
    delay: Math.random() * 5,
    x: Math.random() * 100,
    y: Math.random() * 100,
    color: `hsl(${Math.random() * 60 + 200}, 100%, ${Math.random() * 30 + 70}%)`
  }));

  // Create colorful floating orbs
  const orbs = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 20,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
    x: Math.random() * 100,
    color: `hsl(${Math.random() * 360}, 70%, 60%)`
  }));

  // Create shooting stars
  const shootingStars = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    duration: Math.random() * 2 + 1,
    delay: Math.random() * 15,
    x: Math.random() * 100,
    color: `hsl(${Math.random() * 60 + 180}, 100%, 70%)`
  }));

  return (
    <div style={styles.container}>
      {/* Animated Sky Gradient */}
      <motion.div
        style={styles.skyBackground}
        animate={{
          background: [
            'linear-gradient(45deg, #1a2980, #26d0ce)',
            'linear-gradient(45deg, #4776E6, #8E54E9)',
            'linear-gradient(45deg, #614385, #516395)',
            'linear-gradient(45deg, #1a2980, #26d0ce)',
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Moon */}
      <motion.div
        style={styles.moon}
        animate={{
          y: ['0%', '5%', '0%'],
          rotate: [0, 5, 0],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <motion.div
          style={styles.moonGlow}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Twinkling Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          style={{
            ...styles.star,
            width: star.size,
            height: star.size,
            left: `${star.x}%`,
            top: `${star.y}%`,
            background: star.color,
            boxShadow: `0 0 ${star.size * 2}px ${star.size}px ${star.color}`
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut"
          }}
        />
      ))}

      {/* Colorful Floating Orbs */}
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          style={{
            ...styles.orb,
            width: orb.size,
            height: orb.size,
            left: `${orb.x}%`,
            background: `radial-gradient(circle, ${orb.color}, transparent)`,
            filter: `blur(${orb.size / 10}px)`
          }}
          animate={{
            y: ['100vh', '-100vh'],
            x: [0, Math.random() * 100 - 50, 0],
            rotate: [0, 180, 360],
            scale: [0.8, 1.2, 0.8],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            delay: orb.delay,
            ease: "linear"
          }}
        />
      ))}

      {/* Shooting Stars */}
      {shootingStars.map((star) => (
        <motion.div
          key={star.id}
          style={{
            ...styles.shootingStar,
            left: `${star.x}%`,
            background: star.color,
            boxShadow: `0 0 10px 2px ${star.color}`
          }}
          animate={{
            x: ['0vw', '100vw'],
            y: ['0vh', '100vh'],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "linear"
          }}
        />
      ))}

      {/* Floating Clouds */}
      <motion.div
        style={styles.cloud1}
        animate={{
          x: ['-100%', '100%'],
          y: ['0%', '5%', '0%'],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        style={styles.cloud2}
        animate={{
          x: ['100%', '-100%'],
          y: ['10%', '5%', '10%'],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Content */}
      <div style={styles.content}>
        <motion.h1
          style={styles.title}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Magical Night Sky
        </motion.h1>
        <motion.p
          style={styles.subtitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Under the infinite animated sky
        </motion.p>
        
        <motion.div
          style={styles.floatingText}
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.05, 1],
            rotate: [0, 1, -1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          ✨ Wish upon a star ✨
        </motion.div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
  },
  skyBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  moon: {
    position: 'absolute',
    top: '10%',
    right: '10%',
    width: '120px',
    height: '120px',
    background: 'radial-gradient(circle, #f8f9fa, #e9ecef)',
    borderRadius: '50%',
    boxShadow: '0 0 60px 20px rgba(248, 249, 250, 0.5)',
    zIndex: 2,
  },
  moonGlow: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '140px',
    height: '140px',
    background: 'radial-gradient(circle, rgba(248, 249, 250, 0.3), transparent)',
    borderRadius: '50%',
    transform: 'translate(-50%, -50%)',
    filter: 'blur(10px)',
  },
  star: {
    position: 'absolute',
    borderRadius: '50%',
    zIndex: 1,
  },
  orb: {
    position: 'absolute',
    borderRadius: '50%',
    opacity: 0.6,
    zIndex: 0,
  },
  shootingStar: {
    position: 'absolute',
    top: '-10px',
    width: '3px',
    height: '3px',
    borderRadius: '50%',
    zIndex: 1,
  },
  cloud1: {
    position: 'absolute',
    top: '20%',
    width: '200px',
    height: '60px',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '50%',
    filter: 'blur(10px)',
    zIndex: 1,
  },
  cloud2: {
    position: 'absolute',
    top: '30%',
    width: '300px',
    height: '80px',
    background: 'rgba(255, 255, 255, 0.08)',
    borderRadius: '50%',
    filter: 'blur(15px)',
    zIndex: 1,
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: 'white',
    zIndex: 10,
    textShadow: '2px 2px 10px rgba(0,0,0,0.5)',
  },
  title: {
    fontSize: '4rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    background: 'linear-gradient(45deg, #ffd700, #ff6b6b, #4ecdc4, #9b59b6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    backgroundSize: '300% 300%',
    animation: 'gradientShift 6s ease infinite',
  },
  subtitle: {
    fontSize: '1.5rem',
    opacity: 0.9,
    marginBottom: '40px',
  },
  floatingText: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
    background: 'rgba(255,255,255,0.2)',
    padding: '15px 30px',
    borderRadius: '30px',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255,255,255,0.3)',
    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
  },
};

// Add CSS animation for gradient text
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
  @keyframes gradientShift {
    0% { background-position: 0% 50% }
    50% { background-position: 100% 50% }
    100% { background-position: 0% 50% }
  }
`, styleSheet.cssRules.length);

export default MagicalSkyBackground;