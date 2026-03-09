import { useMemo } from "react";
import { motion as Motion } from "framer-motion";

const FloatingParticles = ({ darkMode }) => {
    const particles = useMemo(() => {
        const width = typeof window !== "undefined" ? window.innerWidth : 1280;
        const height = typeof window !== "undefined" ? window.innerHeight : 720;

        return Array.from({ length: 20 }, (_, id) => ({
            id,
            x: Math.random() * width,
            y: Math.random() * height,
            targetX: Math.random() * width,
            targetY: Math.random() * height,
            duration: Math.random() * 20 + 10,
        }));
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle) => (
                <Motion.div
                    key={particle.id}
                    className={`absolute w-1 h-1 rounded-full ${darkMode ? "bg-indigo-400/20" : "bg-indigo-600/20"
                        }`}
                    initial={{
                        x: particle.x,
                        y: particle.y,
                    }}
                    animate={{
                        x: particle.targetX,
                        y: particle.targetY,
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    );
};

export default FloatingParticles;
