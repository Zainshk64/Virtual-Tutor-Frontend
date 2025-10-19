import React from "react";
import { motion } from "framer-motion";
import { Twitter, Linkedin, Github, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollToTop from "../hooks/ScrollToTop";

const footerNavItems = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "Contact", link: "/contact" },
  { label: "Lecture Generator", link: "/generatelecture" },
  { label: "Live Discussion", link: "/livediscussion" },
  { label: "Slides & Notes", link: "/slides-notes" },
  { label: "Login", link: "/login" },
];

const socialLinks = [
  { label: "Twitter", icon: Twitter, link: "https://twitter.com" },
  { label: "LinkedIn", icon: Linkedin, link: "https://linkedin.com" },
  { label: "GitHub", icon: Github, link: "https://github.com" },
];

function Footer() {
  // Animation variants
  const hoverTap = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.95 },
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-darked text-textcolor py-12"
    >
      <div className="mx-auto max-w-6xl w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <motion.div {...hoverTap} className="flex flex-col gap-4">
            <Link to="/" onClick={ScrollToTop}>
              <div className="flex items-center group">
                <img src="/logo.jpg" width={70} alt="Virtual Tutor Logo" />
                <div className="flex flex-col leading-tight ml-4">
                  <span className="font-bold text-xl text-orange group-hover:text-orange2 transition-colors">
                    Virtual Tutor
                  </span>
                  <span className="text-textcolor/60 text-xs">AI Powered</span>
                </div>
              </div>
            </Link>
            <p className="text-textcolor/80 text-sm">
              Empowering education with AI-driven tutoring and interactive
              learning.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold text-textcolor mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerNavItems.map((item, index) => (
                <motion.li key={index} {...hoverTap}>
                  <Link
                    to={item.link}
                    onClick={ScrollToTop}
                    className="text-textcolor/70 hover:text-orange text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold text-textcolor mb-4">
              Connect With Us
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-textcolor/70 hover:text-orange transition-colors"
                  {...hoverTap}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold text-textcolor mb-4">
              Newsletter
            </h3>
            <p className="text-textcolor/80 text-sm mb-4">
              Subscribe for updates on new courses and features.
            </p>
            <div className="flex gap-2">
              <motion.input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-darked/5 border-2 border-transparent rounded-xl focus:border-orange focus:outline-none text-textcolor text-sm"
                {...hoverTap}
              />
              <motion.button
                className="px-4 py-2 bg-orange text-textcolor rounded-xl hover:bg-orange2 transition-colors"
                {...hoverTap}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-textcolor/20 text-center">
          <p className="text-textcolor/60 text-sm">
            © 2025 Virtual Tutor. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
