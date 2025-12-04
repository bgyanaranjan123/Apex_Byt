import { motion } from "framer-motion";

export default function PageHeader({ title }) {
  return (
    <section style={{ background:"#eef3ff", padding:"50px 0" }}>
      <div className="container">
        <motion.h1
          initial={{ opacity:0, x:-80 }}
          animate={{ opacity:1, x:0 }}
          transition={{ duration:0.6 }}
          style={{ fontSize:"2.5rem", fontWeight:"600" }}
        >
          {title}
        </motion.h1>
      </div>
    </section>
  );
}
