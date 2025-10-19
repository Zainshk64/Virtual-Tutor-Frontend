import { Menu, X, LayoutDashboard, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../hooks/ScrollToTop";

const navItems = [
  { label: "Home", link: "/" },
  { label: "About", link: "/about" },
  { label: "Contact", link: "/contact" },
  { label: "Lecture Generator", link: "/generatelecture" },
  { label: "Live Discussion", link: "/livediscussion" },
  { label: "Slides & Notes", link: "/slides-notes" },
];

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openUserPop, setOpenUserPop] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const userName = "John Doe";

  // Animation variants for hover and tap
  const hoverTap = {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScroll
          ? "bg-[var(--color-darked)]/50 backdrop-blur-lg shadow-sm border-b border-[var(--color-orange2)]/30"
          : "bg-[var(--color-darked)]/80 backdrop-blur-md border-b border-orange2/10"
      }`}
    >
      <div className="mx-auto max-w-6xl w-full flex items-center justify-between p-5 ">
        {/* Logo */}
        <Link to="/" onClick={ScrollToTop}>
          <motion.div
            className="flex cursor-pointer items-center group"
            {...hoverTap}
          >
           
            <img src="/logo.jpg" width={50} alt="Virtual Tutor Logo" />
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-xl text-[var(--color-orange)] group-hover:text-[var(--color-orange2)] transition-colors">
                Virtual Tutor
              </span>
              <span className="text-[var(--color-textcolor)]/60 text-xs">
                AI Powered
              </span>
            </div>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item, index) => (
            <Link key={index} to={item.link} onClick={ScrollToTop}>
              <motion.div {...hoverTap}>
                <button
                  className="px-4 py-2 rounded-lg cursor-pointer text-sm font-medium transition-all duration-200 text-[var(--color-textcolor)] hover:text-[var(--color-orange)]"
                >
                  {item.label}
                </button>
              </motion.div>
            </Link>
          ))}
        </nav>

        {/* Desktop Auth Section */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="relative user-dropdown">
            <motion.div {...hoverTap}>
              <Link to="/login" onClick={ScrollToTop} >
                <button className="flex items-center gap-3 px-6 py-3 rounded-xl bg-[var(--color-darked)] hover:bg-[var(--color-orange2)]/30 cursor-pointer border border-[var(--color-orange2)]/40 transition-all">
                  Login
                </button>
              </Link>
            </motion.div>

            {/* Commented out user dropdown */}
            {/* <motion.div {...hoverTap}>
              <button
                onClick={() => setOpenUserPop(!openUserPop)}
                className="flex items-center gap-3 px-4 py-2 rounded-xl bg-[var(--color-darked)] hover:bg-[var(--color-orange2)]/30 border border-[var(--color-orange2)]/30 transition-all"
              >
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[var(--color-orange)] to-[var(--color-orange2)] flex items-center justify-center text-[var(--color-textcolor)] font-semibold">
                  {userName.charAt(0).toUpperCase()}
                </div>
                <span className="text-sm font-medium text-[var(--color-textcolor)]">
                  {userName}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-[var(--color-textcolor)]/60 transition-transform ${
                    openUserPop ? "rotate-180" : ""
                  }`}
                />
              </button>
            </motion.div> */}

            {/* Commented out user dropdown menu */}
            {/* <AnimatePresence>
              {openUserPop && (
                <motion.div
                  {...hoverTap}
                  className="absolute right-0 mt-2 w-64 bg-[var(--color-darked)] rounded-2xl shadow-2xl border border-[var(--color-orange2)]/20 overflow-hidden"
                >
                  <div className="p-4 bg-gradient-to-br from-[var(--color-orange)]/5 to-[var(--color-orange2)]/5 border-b border-[var(--color-orange2)]/20">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-orange)] to-[var(--color-orange2)] flex items-center justify-center text-[var(--color-textcolor)] font-bold text-lg">
                        {userName.charAt(0).toUpperCase()}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-[var(--color-textcolor)] truncate">
                          {userName}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-2">
                    <Link to="/dashboard" onClick={ScrollToTop}>
                      <button
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[var(--color-orange2)]/30 transition-colors text-left group"
                      >
                        <LayoutDashboard className="w-5 h-5 text-[var(--color-orange)]" />
                        <span className="text-sm font-medium text-[var(--color-textcolor)] group-hover:text-[var(--color-orange)]">
                          Dashboard
                        </span>
                      </button>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence> */}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <motion.div>
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="lg:hidden p-2 rounded-xl cursor-pointer transition-colors"
          >
            {openMenu ? (
              <X className="h-6 w-6 text-[var(--color-textcolor)]" />
            ) : (
              <Menu className="h-6 w-6 text-[var(--color-textcolor)]" />
            )}
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {openMenu && (
          <motion.div
             initial={{ height: 0, opacity: 0 }}
            animate={{ height: "", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-[var(--color-darked)]/30 border-t border-[var(--color-orange2)]/20"
          >
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link to={item.link} onClick={ScrollToTop}>
                    <button
                      className="w-full text-left cursor-pointer block px-4 py-3 rounded-xl text-base font-medium transition-all text-[var(--color-textcolor)] hover:bg-[var(--color-orange2)]/30 hover:text-[var(--color-orange)]"
                    >
                      {item.label}
                    </button>
                  </Link>
                </motion.div>
              ))}
              <motion.div>
                <Link to="/login" onClick={ScrollToTop} >

                <button className="flex items-center gap-3 px-6 py-3 rounded-xl bg-[var(--color-darked)] hover:bg-[var(--color-orange2)]/30 cursor-pointer border border-[var(--color-orange2)]/40 transition-all">
                  Login
                </button>
                </Link>
              </motion.div>

              {/* Commented out mobile auth section */}
              {/* <div className="pt-4 border-t border-[var(--color-orange2)]/20 space-y-3">
                <div className="px-4 py-3 bg-[var(--color-darked)]/60 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--color-orange)] to-[var(--color-orange2)] flex items-center justify-center text-[var(--color-textcolor)] font-bold text-lg">
                      {userName.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-[var(--color-textcolor)] truncate">
                        {userName}
                      </p>
                    </div>
                  </div>
                </div>
                <Link to="/dashboard" onClick={ScrollToTop}>
                  <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-[var(--color-darked)]/60 hover:bg-[var(--color-orange2)]/30 transition-colors">
                    <LayoutDashboard className="w-5 h-5 text-[var(--color-orange)]" />
                    <span className="text-sm font-medium text-[var(--color-textcolor)]">
                      Dashboard
                    </span>
                  </button>
                </Link>
              </div> */}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;