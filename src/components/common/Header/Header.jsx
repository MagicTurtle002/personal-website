import { motion as Motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { navItems } from "../../../utils/constants";
import MobileNavMenu from "./MobileNavMenu";
import HamburgerMenu from "./HamburgerMenu";
import DesktopNavLinks from "./DesktopNav";

const LiquidGlassNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const { scrollY } = useScroll();

    const navOpacity = useTransform(scrollY, [0, 100], [1, 1]);
    const navBlur = useTransform(scrollY, [0, 100], [16, 20]);

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => document.getElementById(item.id));
            const scrollPosition = window.scrollY + 100; // Offset for navbar height

            let currentSection = "home";

            sections.forEach((section) => {
                if (section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;

                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        currentSection = section.id;
                    }
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (id) => {
        setActiveSection(id);
        setIsMenuOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <Motion.nav
                className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-4xl px-4"
                style={{
                    backdropFilter: `blur(${navBlur}px) saturate(180%)`
                }}
            >
                <Motion.div
                    className="relative overflow-hidden rounded-2xl border border-white/50 shadow-2xl bg-white/80 backdrop-blur-xl"
                    style={{ 
                        opacity: navOpacity
                    }}
                >
                    {/* Enhanced frosted glass background layers */}
                    <Motion.div
                        className="absolute inset-0"
                        style={{
                            background: "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.12) 100%)"
                        }}
                    />
                    
                    {/* Subtle animated gradient overlay */}
                    <Motion.div
                        className="absolute inset-0"
                        animate={{
                            background: [
                                "linear-gradient(45deg, rgba(59,130,246,0.03), rgba(147,51,234,0.03), rgba(236,72,153,0.03))",
                                "linear-gradient(135deg, rgba(147,51,234,0.03), rgba(236,72,153,0.03), rgba(59,130,246,0.03))",
                                "linear-gradient(225deg, rgba(236,72,153,0.03), rgba(59,130,246,0.03), rgba(147,51,234,0.03))",
                                "linear-gradient(315deg, rgba(59,130,246,0.03), rgba(147,51,234,0.03), rgba(236,72,153,0.03))"
                            ]
                        }}
                        transition={{
                            duration: 12,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />

                    {/* Top highlight for glass effect */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    
                    {/* Side highlights */}
                    <div className="absolute top-0 left-0 bottom-0 w-px bg-gradient-to-b from-white/10 via-transparent to-white/10" />
                    <div className="absolute top-0 right-0 bottom-0 w-px bg-gradient-to-b from-white/10 via-transparent to-white/10" />

                    <div className="relative px-6 py-4">
                        <div className="flex items-center justify-between">
                            <Motion.div
                                className="font-display font-bold text-xl text-gray-800 cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleNavClick("home")}
                            >
                                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                    Dan Teodoro
                                </span>
                            </Motion.div>

                            <DesktopNavLinks
                                activeSection={activeSection}
                                handleNavClick={handleNavClick}
                            />

                            <HamburgerMenu
                                isMenuOpen={isMenuOpen}
                                toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
                            />
                        </div>
                    </div>

                    {/* Enhanced shimmer effect */}
                    <Motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        animate={{
                            x: ["-100%", "100%"]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            repeatDelay: 3,
                            ease: "easeInOut"
                        }}
                        style={{
                            maskImage: "linear-gradient(90deg, transparent 0%, white 50%, transparent 100%)",
                            WebkitMaskImage: "linear-gradient(90deg, transparent 0%, white 50%, transparent 100%)"
                        }}
                    />

                    {/* Bottom shadow for depth */}
                    <div className="absolute -bottom-1 left-2 right-2 h-1 bg-gradient-to-r from-transparent via-black/5 to-transparent blur-sm" />
                </Motion.div>
            </Motion.nav>

            <MobileNavMenu
                isMenuOpen={isMenuOpen}
                activeSection={activeSection}
                handleNavClick={handleNavClick}
            />

            {isMenuOpen && (
                <Motion.div
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsMenuOpen(false)}
                />
            )}
        </>
    );
};

export default LiquidGlassNavbar;
