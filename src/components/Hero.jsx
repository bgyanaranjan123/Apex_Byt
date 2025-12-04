import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section>
      <div className="container">
        <motion.div
          initial={{ opacity:0, y:50 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.8 }}
        >
          <h1 style={{ fontSize:"3rem", fontWeight:"700", marginBottom:"20px" }}>
            Transforming IT, Driving Success
          </h1>

          <p style={{ maxWidth:"600px", fontSize:"1.1rem", marginBottom:"30px" }}>
            Empowering businesses with software development, cloud solutions, and IT staffing excellence.
          </p>

          <motion.button
            whileHover={{ scale:1.1 }}
            style={{
              padding:"12px 30px",
              border:"none",
              background:"#0077ff",
              color:"#fff",
              borderRadius:"6px",
              cursor:"pointer"
            }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
