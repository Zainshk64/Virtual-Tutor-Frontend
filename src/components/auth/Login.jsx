import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, User, Eye, EyeOff, ArrowRight } from "lucide-react";

const Login = () => {
  const [currentView, setCurrentView] = useState("login"); // login or register
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const getViewTitle = () => {
    switch (currentView) {
      case "login":
        return "Welcome Back!";
      case "register":
        return "Create Account";
      default:
        return "Welcome!";
    }
  };

  const getViewSubtitle = () => {
    switch (currentView) {
      case "login":
        return "Enter your credentials to access your account";
      case "register":
        return "Fill in your details to get started";
      default:
        return "";
    }
  };

  // Animation variants
  const slideUp = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const fade = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <div className="min-h-screen bg-darked flex items-center justify-center px-4 py-12">
      <div className="mx-auto max-w-6xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-textcolor rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left Section - Image and Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative bg-darked/90 p-6 md:p-12 flex flex-col gap-10 justify-between min-h-[400px] md:min-h-[600px]"
            >
              <div className="space-y-4 z-10">
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                  className="text-3xl md:text-5xl font-bold text-textcolor leading-tight"
                >
                  Empower Your Learning Journey
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                  className="text-textcolor/80 md:text-lg"
                >
                  Join Virtual Tutor to access AI-powered tutoring, interactive lessons, and personalized resources to excel in your education.
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentView}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    src="https://www.eschoolnews.com/files/2024/02/what-is-the-impact-of-artificial-intelligence-on-students.jpeg"
                    alt="Virtual Tutor Education"
                    className="rounded-3xl object-cover w-full h-64 md:h-full"
                  />
                </AnimatePresence>
              </motion.div>
            </motion.div>

            {/* Right Section - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-6 md:p-12 flex flex-col justify-center"
            >
              {/* Toggle Buttons */}
              <div className="flex gap-2 mb-8 bg-darked/10 p-1 rounded-full">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setCurrentView("login")}
                  className={`flex-1 py-3 px-6 rounded-full cursor-pointer font-semibold transition-all duration-500 ${
                    currentView === "login"
                      ? "bg-orange text-textcolor shadow-md"
                      : "text-darked hover:text-orange"
                  }`}
                >
                  Login
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setCurrentView("register")}
                  className={`flex-1 py-3 px-6 rounded-full cursor-pointer font-semibold transition-all duration-500 ${
                    currentView === "register"
                      ? "bg-orange text-textcolor shadow-md"
                      : "text-darked hover:text-orange"
                  }`}
                >
                  Sign Up
                </motion.button>
              </div>

              {/* Form Title and Subtitle */}
              <motion.div
                key={currentView}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-8"
              >
                <h3 className="text-3xl font-bold text-darked mb-2">
                  {getViewTitle()}
                </h3>
                <p className="text-darked/60">{getViewSubtitle()}</p>
              </motion.div>

              {/* Form Content */}
              <div className="space-y-6">
                <AnimatePresence mode="wait">
                  {currentView === "login" && (
                    <motion.div
                      key="login"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-6"
                    >
                      {/* Email */}
                      <div>
                        <label className="block text-sm font-semibold text-darked mb-2">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-darked/40" />
                          <motion.input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your@email.com"
                            className="w-full pl-12 pr-4 py-3 text-darked bg-darked/5 border-2 border-transparent rounded-xl focus:border-orange focus:outline-none transition-colors duration-200"
                            variants={slideUp}
                            initial="hidden"
                            animate="visible"
                          />
                        </div>
                      </div>

                      {/* Password */}
                      <div>
                        <label className="block text-sm font-semibold text-darked mb-2">
                          Password
                        </label>
                        <div className="relative">
                          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-darked/40" />
                          <motion.input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="••••••••"
                            className="w-full pl-12 pr-12 py-3 text-darked bg-darked/5 border-2 border-transparent rounded-xl focus:border-orange focus:outline-none transition-colors duration-200"
                            variants={slideUp}
                            initial="hidden"
                            animate="visible"
                          />
                          <motion.button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 cursor-pointer -translate-y-1/2 text-darked/40 hover:text-darked transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                          </motion.button>
                        </div>
                      </div>

                      {/* Login Button */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-4 bg-orange cursor-pointer text-textcolor rounded-xl font-semibold hover:bg-orange2 transition-colors duration-200 flex items-center justify-center space-x-2 group"
                        variants={slideUp}
                        initial="hidden"
                        animate="visible"
                      >
                        <span>Login</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                      </motion.button>
                    </motion.div>
                  )}

                  {currentView === "register" && (
                    <motion.div
                      key="register"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-6"
                    >
                      {/* Username */}
                      <div>
                        <label className="block text-sm font-semibold text-darked mb-2">
                          Username
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-darked/40" />
                          <motion.input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                            placeholder="johndoe"
                            className="w-full pl-12 pr-4 py-3 text-darked bg-darked/5 border-2 border-transparent rounded-xl focus:border-orange focus:outline-none transition-colors duration-200"
                            variants={slideUp}
                            initial="hidden"
                            animate="visible"
                          />
                        </div>
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sm font-semibold text-darked mb-2">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2  -translate-y-1/2 w-5 h-5 text-darked/40" />
                          <motion.input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your@email.com"
                            className="w-full pl-12 pr-4 py-3 text-darked bg-darked/5 border-2 border-transparent rounded-xl focus:border-orange focus:outline-none transition-colors duration-200"
                            variants={slideUp}
                            initial="hidden"
                            animate="visible"
                          />
                        </div>
                      </div>

                      {/* Password */}
                      <div>
                        <label className="block text-sm font-semibold text-darked mb-2">
                          Password
                        </label>
                        <div className="relative">
                          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-darked/40" />
                          <motion.input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="••••••••"
                            className="w-full pl-12 pr-12 py-3 text-darked bg-darked/5 border-2 border-transparent rounded-xl focus:border-orange focus:outline-none transition-colors duration-200"
                            variants={slideUp}
                            initial="hidden"
                            animate="visible"
                          />
                          <motion.button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 cursor-pointer -translate-y-1/2 text-darked/40 hover:text-darked transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                          </motion.button>
                        </div>
                      </div>

                      {/* Confirm Password */}
                      <div>
                        <label className="block text-sm font-semibold text-darked mb-2">
                          Re-enter Password
                        </label>
                        <div className="relative">
                          <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-darked/40" />
                          <motion.input
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirm_password"
                            value={formData.confirm_password}
                            onChange={handleInputChange}
                            placeholder="••••••••"
                            className="w-full pl-12 pr-12 py-3 text-darked bg-darked/5 border-2 border-transparent rounded-xl focus:border-orange focus:outline-none transition-colors duration-200"
                            variants={slideUp}
                            initial="hidden"
                            animate="visible"
                          />
                          <motion.button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-4 cursor-pointer top-1/2 -translate-y-1/2 text-darked/40 hover:text-darked transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                          </motion.button>
                        </div>
                      </div>

                      {/* Sign Up Button */}
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-4 bg-orange cursor-pointer text-textcolor rounded-xl font-semibold hover:bg-orange2 transition-colors duration-200 flex items-center justify-center space-x-2 group"
                        variants={slideUp}
                        initial="hidden"
                        animate="visible"
                      >
                        <span>Create Account</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;