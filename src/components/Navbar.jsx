import { Menu, X, LayoutDashboard, ChevronDown } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ScrollToTop from "../hooks/ScrollToTop";
import AnimatedWrap from "../components/ui/AnimatedWrap"; // Assuming this is the path to your reusable component

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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScroll
          ? "bg-[var(--color-darked)]/50 backdrop-blur-lg shadow-sm border-b border-[var(--color-orange2)]/20"
          : "bg-[var(--color-darked)]/80 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 h-20">
        {/* Logo */}
        <Link to={"/"} onClick={ScrollToTop}>
          <AnimatedWrap preset="slideUp">
            <div className="flex cursor-pointer items-center group">
              {/* <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-orange)] to-[var(--color-orange2)] text-[var(--color-textcolor)] font-bold text-xl shadow-lg">
                EO
              </div> */}
              <img src="/logo.jpg" width={70} alt="" />
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-xl text-[var(--color-orange)] group-hover:text-[var(--color-orange2)] transition-colors">
                  Virtual Tutor
                </span>
                <span className="text-[var(--color-textcolor)]/60 text-xs">
                  AI Powered
                </span>
              </div>
            </div>
          </AnimatedWrap>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item, index) => (
            <Link key={index} to={item.link} onClick={ScrollToTop}>
              <AnimatedWrap preset="slideUp">
                <button
                  className={`px-4 py-2 rounded-lg cursor-pointer text-sm font-medium transition-all duration-200 text-[var(--color-textcolor)] hover:text-[var(--color-orange)]`}
                >
                  {item.label}
                </button>
              </AnimatedWrap>
            </Link>
          ))}
        </nav>

        {/* Desktop Auth Section */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="relative user-dropdown">
            <AnimatedWrap preset="slideUp">
              <button
                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-[var(--color-darked)] hover:bg-orange2/30 cursor-pointer border border-orange2/40 transition-all"
              >
                Login
              </button>
            </AnimatedWrap>
            {/* <AnimatedWrap preset="slideUp">
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
            </AnimatedWrap> */}

            {/* className="absolute right-0 mt-2 w-64 bg-[var(--color-darked)] rounded-2xl shadow-2xl border border-[var(--color-orange2)]/20 overflow-hidden" */}

            {/* <AnimatePresence>
              {openUserPop && (
                <AnimatedWrap preset="slideUp">
                  <div
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
                  </div>
                </AnimatedWrap>
              )}
            </AnimatePresence> */}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <AnimatedWrap preset="slideUp">
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
        </AnimatedWrap>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {openMenu && (
          <AnimatedWrap preset="slideUp">
            <div className="lg:hidden overflow-hidden bg-[var(--color-darked)]/30 border-t border-[var(--color-orange2)]/20">
              <div className="px-4 py-6 space-y-2">
                {/* Mobile Navigation Links */}
                {navItems.map((item, index) => (
                  <AnimatedWrap preset="slideUp" key={index}>
                    <Link to={item.link} onClick={ScrollToTop}>
                      <button
                        className={`w-full text-left cursor-pointer block px-4 py-3 rounded-xl text-base font-medium transition-all text-[var(--color-textcolor)] hover:bg-[var(--color-orange2)]/30 hover:text-[var(--color-orange)]`}
                      >
                        {item.label}
                      </button>
                    </Link>
                  </AnimatedWrap>
                ))}

                {/* Mobile Auth Section */}
                <div className="pt-4 border-t border-[var(--color-orange2)]/20 space-y-3">
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
                </div>
              </div>
            </div>
          </AnimatedWrap>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
