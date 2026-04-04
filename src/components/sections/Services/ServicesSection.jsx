import { motion as Motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionHeader from "../../ui/SectionHeader";

const services = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Custom websites and web applications built for performance, usability, and long-term scalability.",
  },
  {
    id: "responsive-design",
    title: "Responsive Website Design",
    description:
      "Mobile-first, responsive layouts that provide a consistent experience across desktop, tablet, and mobile devices.",
  },
  {
    id: "contact-form-integration",
    title: "Contact Form Integration",
    description:
      "Functional and reliable contact forms connected to email or backend services for smooth lead capture.",
  },
  {
    id: "software-testing",
    title: "Software Testing",
    description:
      "Manual and structured testing to improve reliability, reduce bugs, and ensure a smooth user experience.",
  },
  {
    id: "social-media-content",
    title: "Social Media Content Creation",
    description:
      "Branded visual and written content tailored for social platforms to strengthen digital presence and engagement.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-slate-50/60 px-6 py-24 sm:py-28 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8rem] top-24 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-[-6rem] bottom-20 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          subtitle="Services"
          title="What I Can Help You With"
          singleLineTitle
          description="I offer practical digital services that help businesses build, improve, and maintain a professional online presence."
        />

        <div className="mx-auto mt-14 max-w-4xl">
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {services.map((service, index) => {
            return (
              <Motion.li
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-2xl border border-slate-200 bg-white/85 p-6 shadow-sm transition-all duration-300 hover:border-blue-300/60 hover:shadow-md"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Motion.li>
            );
          })}
          </ul>
        </div>
      </div>
    </section>
  );
}
