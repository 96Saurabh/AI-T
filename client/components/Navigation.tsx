import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkBase = "transition-colors font-medium";
  const linkInactive = "text-white hover:text-gray-300";
  const linkActive = "text-gray-300";

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/50 backdrop-blur-lg shadow-sm"
          : "bg-white backdrop-blur-none shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-ai-gradient rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold font-display text-white">
              AI<span className="text-black">Tees</span>
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden text-black md:flex items-center space-x-8">
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
              }
            >
              Shop
            </NavLink>

            <NavLink
              to="/orders"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
              }
            >
              My Orders
            </NavLink>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `${linkBase} ${isActive ? linkActive : linkInactive}`
              }
            >
              Login
            </NavLink>

            {/* <Button
              asChild
              variant="outline"
              size="sm"
              // className="border-white text-white hover:bg-white/10"
            >
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "text-gray-300" : ""
                }
              >
                Login
              </NavLink>
            </Button> */}

            <Button
              asChild
              size="sm"
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-base font-medium text-white hover:opacity-90 transition"
            >
              <NavLink
                to="/design"
                className={({ isActive }) => (isActive ? "opacity-90" : "")}
              >
                Start Designing
              </NavLink>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4">
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  `${linkBase} px-4 py-2 ${
                    isActive ? linkActive : linkInactive
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Shop
              </NavLink>

              <NavLink
                to="/design"
                className={({ isActive }) =>
                  `${linkBase} px-4 py-2 ${
                    isActive ? linkActive : linkInactive
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Design
              </NavLink>

              <NavLink
                to="/orders"
                className={({ isActive }) =>
                  `${linkBase} px-4 py-2 ${
                    isActive ? linkActive : linkInactive
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                My Orders
              </NavLink>

              <div className="px-4 pt-2 space-y-2">
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-white text-white hover:bg-white/10"
                >
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      isActive ? "text-gray-300" : ""
                    }
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Login
                  </NavLink>
                </Button>

                <Button
                  asChild
                  className="w-full bg-ai-gradient hover:opacity-90 text-white border-0"
                >
                  <NavLink
                    to="/design"
                    className={({ isActive }) => (isActive ? "opacity-90" : "")}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Start Designing
                  </NavLink>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
