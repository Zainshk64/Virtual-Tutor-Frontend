import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ScrollToTop from "../../hooks/ScrollToTop";

const HomeBanner = () => {
  // Animation variants
  const hoverTap = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.95 },
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 px-4 pb-24 pt-16 lg:pt-24 bg-darked"
    >
      {/* Text Content */}
      <div className="flex flex-col justify-center gap-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-textcolor leading-tight"
        >
          Learn Smarter with Virtual Tutor
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="text-textcolor/80 text-lg md:text-xl"
        >
          Unlock your potential with AI-powered tutoring, interactive lessons, and personalized study resources.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
          className="flex gap-4"
        >
          <Link to="/login" onClick={ScrollToTop}>
            <motion.button
              {...hoverTap}
              className="px-6 py-3 bg-orange text-textcolor rounded-xl font-semibold hover:bg-orange2 transition-colors flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
          {/* <Link to="/courses" onClick={ScrollToTop}> */}
            <motion.button
              {...hoverTap}
              className="px-6 py-3 bg-darked/5 text-orange border border-orange rounded-xl font-semibold hover:bg-orange2/20 transition-colors flex items-center gap-2"
            >
              Explore Courses
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          {/* </Link> */}
        </motion.div>
      </div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
        className="flex justify-center md:justify-end"
      >
        <img
          src="https://techresearchonline.com/wp-content/uploads/2025/03/Artboard-10-2.webp"
          alt="Online Learning with Virtual Tutor"
          className="rounded-xl object-cover w-full max-w-md h-64 md:h-96"
        />
      </motion.div>
    </motion.section>
  );
};

export default HomeBanner;