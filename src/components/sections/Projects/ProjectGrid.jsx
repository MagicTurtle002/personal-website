import { motion as Motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";

const ProjectGrid = ({ projects, onOpenModal }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
      {projects.map((project, index) => (
        <Motion.div
          key={project.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <ProjectCard project={project} onOpenModal={onOpenModal} />
        </Motion.div>
      ))}
    </div>
  );
};

export default ProjectGrid;
