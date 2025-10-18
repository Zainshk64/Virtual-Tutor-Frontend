// src/components/ui/AnimatedWrap.jsx
import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const presets = {
  fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  scale: { hidden: { scale: 0.95, opacity: 0 }, visible: { scale: 1, opacity: 1 } },
  slideUp: { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1 } },
  slideLeft: { hidden: { x: 20, opacity: 0 }, visible: { x: 0, opacity: 1 } },
};

export default function AnimatedWrap({
  preset = "fade",
  duration = 0.6,
  delay = 0,
  once = true,
  className = "",
  children,
  whileHover,
  ...rest
}) {
  const variant = presets[preset] ?? presets.fade;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      variants={variant}
      transition={{ duration, delay, ease: "easeOut" }}
      whileHover={whileHover}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

AnimatedWrap.propTypes = {
  preset: PropTypes.oneOf(Object.keys(presets)),
  duration: PropTypes.number,
  delay: PropTypes.number,
  once: PropTypes.bool,
  className: PropTypes.string,
  whileHover: PropTypes.object,
};