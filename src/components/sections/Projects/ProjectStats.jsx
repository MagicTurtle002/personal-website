import { useStatsAnimation } from "../../../hooks/useStatAnimation";
import Counter from "../../ui/Counter";

const ProjectStats = ({ stats }) => {
    const animate = useStatsAnimation();
    
    return (
        <div
            id="project-stats"
            className="mb-16 p-8 rounded-3xl bg-gradient-to-br from-white/60 via-slate-50/80 to-white/60 backdrop-blur-xl border border-slate-200/50 relative overflow-hidden shadow-xl"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/3 via-transparent to-purple-500/3"></div>
            <div className="relative z-10">
                <h3 className="text-2xl font-bold text-center text-slate-800 mb-8">
                    Project Impact & Statistics
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat) => (
                        <div key={stat.label} className="text-center group">
                            <div className="relative">
                                <h4 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                                    <Counter end={stat.value} animate={animate} />
                                    {stat.suffix}
                                </h4>
                                <div className="absolute inset-0 text-4xl md:text-5xl font-black text-blue-500/10 blur-sm">
                                    <Counter end={stat.value} animate={animate} />
                                    {stat.suffix}
                                </div>
                            </div>
                            <p className="text-slate-600 font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectStats;