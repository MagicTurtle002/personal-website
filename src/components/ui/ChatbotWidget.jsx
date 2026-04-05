import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { Bot, MessageCircle, Send, X } from "lucide-react";
import { projects, skillsTools } from "../../utils/constants";

const services = [
  "Web Development",
  "Responsive Website Design",
  "Contact Form Integration",
  "Software Testing",
  "Social Media Content Creation",
];

const contactInfo = {
  email: "vincentgteodoro@gmail.com",
  phone: "+639164180808",
  linkedin: "https://www.linkedin.com/in/dan-vincent-teodoro/",
  github: "https://github.com/MagicTurtle002",
  location: "Manila, Philippines",
  resume: "/resume.pdf",
};

const initialMessages = [
  {
    id: "welcome-message",
    role: "assistant",
    content:
      "Hi! I am Dan's portfolio assistant. Ask about projects, services, skills, tools, or contact details.",
  },
];

const quickPrompts = [
  "Show your latest project",
  "What services do you offer?",
  "Show skills and tools",
  "How can I contact Dan?",
];

const createMessage = (role, content) => ({
  id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
  role,
  content,
});

const containsAny = (text, keywords) =>
  keywords.some((keyword) => text.includes(keyword));
const containsWord = (text, word) =>
  new RegExp(`\\b${word}\\b`, "i").test(text);

const buildProjectsReply = (query) => {
  const matchedProject = projects.find((project) => {
    const title = project.title.toLowerCase();
    return (
      query.includes(title) ||
      query.includes(project.id.toLowerCase()) ||
      query.includes(project.title.split(":")[0].toLowerCase())
    );
  });

  if (matchedProject) {
    const lines = [
      `${matchedProject.title} (${matchedProject.year})`,
      `${matchedProject.description}`,
      `Type: ${matchedProject.projectType}`,
      `Tech: ${matchedProject.techStack.join(", ")}`,
    ];

    if (matchedProject.demoLink && matchedProject.demoLink !== "#") {
      lines.push(`Live Demo: ${matchedProject.demoLink}`);
    }
    if (matchedProject.codeLink && matchedProject.codeLink !== "#") {
      lines.push(`Source Code: ${matchedProject.codeLink}`);
    }

    return lines.join("\n");
  }

  const list = projects
    .map((project, index) => {
      const liveSuffix =
        project.demoLink && project.demoLink !== "#"
          ? ` | Live: ${project.demoLink}`
          : "";
      return `${index + 1}. ${project.title} (${project.year}) - ${
        project.projectType
      }${liveSuffix}`;
    })
    .join("\n");

  return `Here are Dan's current projects:\n${list}\n\nAsk me for details about Privacy and Security by Design, Pawsitive, or Unleash.`;
};

const buildSkillsReply = () => {
  const lines = skillsTools
    .map(
      (skill) =>
        `${skill.title}: ${(skill.stack || []).join(", ") || skill.description}`
    )
    .join("\n");

  return `Skills and tools used across the portfolio:\n${lines}`;
};

const buildServicesReply = () =>
  `Services offered:\n${services
    .map((service, index) => `${index + 1}. ${service}`)
    .join("\n")}`;

const buildContactReply = () =>
  `You can contact Dan here:\nEmail: ${contactInfo.email}\nPhone: ${contactInfo.phone}\nLinkedIn: ${contactInfo.linkedin}\nGitHub: ${contactInfo.github}\nLocation: ${contactInfo.location}\nResume: ${contactInfo.resume}`;

const panelMotion = {
  initial: { opacity: 0, y: 18, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: 14, scale: 0.98 },
  transition: { duration: 0.22, ease: "easeOut" },
};

const bubbleMotion = {
  initial: { opacity: 0, y: 10, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  transition: { duration: 0.18, ease: "easeOut" },
};

const linkTokenRegex =
  /(https?:\/\/[^\s]+|www\.[^\s]+|\/[a-zA-Z0-9/_\-.]+|[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}|\+?\d[\d\s-]{7,}\d)/g;
const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const phoneRegex = /^\+?\d[\d\s-]{7,}\d$/;

const getHrefForToken = (token) => {
  if (emailRegex.test(token)) return `mailto:${token}`;
  if (phoneRegex.test(token)) return `tel:${token.replace(/\s+/g, "")}`;
  if (token.startsWith("www.")) return `https://${token}`;
  if (
    token.startsWith("http://") ||
    token.startsWith("https://") ||
    token.startsWith("/")
  ) {
    return token;
  }

  return null;
};

const renderLineWithLinks = (line, lineIndex) => {
  const parts = [];
  let cursor = 0;

  for (const match of line.matchAll(linkTokenRegex)) {
    const token = match[0];
    const startIndex = match.index ?? 0;
    const endIndex = startIndex + token.length;

    if (startIndex > cursor) {
      parts.push(line.slice(cursor, startIndex));
    }

    const href = getHrefForToken(token);

    if (href) {
      parts.push(
        <a
          key={`ln-${lineIndex}-${startIndex}-${token}`}
          href={href}
          target={href.startsWith("/") ? "_self" : "_blank"}
          rel={href.startsWith("/") ? undefined : "noopener noreferrer"}
          className="font-medium underline decoration-indigo-400/80 underline-offset-2 transition-colors hover:text-indigo-700"
        >
          {token}
        </a>
      );
    } else {
      parts.push(token);
    }

    cursor = endIndex;
  }

  if (cursor < line.length) {
    parts.push(line.slice(cursor));
  }

  if (parts.length === 0) {
    return <span>&nbsp;</span>;
  }

  return parts;
};

const generateLocalReply = (input) => {
  const query = input.toLowerCase().trim();

  if (!query) {
    return "Please type a question about projects, services, skills, or contact information.";
  }

  if (
    containsAny(query, ["hello", "hey", "good morning", "good eve"]) ||
    containsWord(query, "hi")
  ) {
    return "Hi! You can ask me about projects, services, skills/tools, or how to contact Dan.";
  }

  if (
    containsAny(query, [
      "project",
      "portfolio",
      "work",
      "privacy",
      "pawsitive",
      "unleash",
    ])
  ) {
    return buildProjectsReply(query);
  }

  if (
    containsAny(query, [
      "service",
      "offer",
      "web development",
      "responsive",
      "contact form",
      "software testing",
      "social media",
    ])
  ) {
    return buildServicesReply();
  }

  if (
    containsAny(query, [
      "skill",
      "tools",
      "tech",
      "stack",
      "frontend",
      "backend",
      "codex",
      "chatgpt",
      "netlify",
      "react",
      "php",
    ])
  ) {
    return buildSkillsReply();
  }

  if (
    containsAny(query, [
      "contact",
      "email",
      "phone",
      "linkedin",
      "github",
      "resume",
      "location",
      "hire",
      "available",
    ])
  ) {
    return buildContactReply();
  }

  if (containsAny(query, ["where", "find", "navigate", "section"])) {
    return "You can navigate the site using these sections: Home, Projects, Services, Skills, and Contact.";
  }

  return "I can answer based on the site content. Try asking about projects, services, skills/tools, or contact details.";
};

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const listRef = useRef(null);

  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, isLoading, isOpen]);

  const submitQuestion = (rawQuestion) => {
    const question = rawQuestion.trim();
    if (!question || isLoading) return;
    const userMessage = createMessage("user", question);

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    window.setTimeout(() => {
      const reply = generateLocalReply(question);
      setMessages((prev) => [...prev, createMessage("assistant", reply)]);
      setIsLoading(false);
    }, 280);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitQuestion(input);
    setInput("");
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <Motion.section
            {...panelMotion}
            className="fixed bottom-24 right-4 z-[70] w-[calc(100vw-2rem)] max-w-md rounded-2xl border border-slate-200 bg-white/95 shadow-2xl backdrop-blur-xl"
          >
            <header className="flex items-center justify-between border-b border-slate-200 px-4 py-3">
              <div className="flex items-center gap-2">
                <Motion.div
                  animate={{ rotate: [0, -8, 8, 0] }}
                  transition={{ duration: 0.45 }}
                  className="rounded-lg bg-indigo-600 p-2 text-white"
                >
                  <Bot className="h-4 w-4" />
                </Motion.div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Portfolio Chat
                  </p>
                  <p className="text-xs text-slate-500">
                    Site Content Assistant
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="rounded-md p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700"
                aria-label="Close portfolio chat"
              >
                <X className="h-4 w-4" />
              </button>
            </header>

            <div
              ref={listRef}
              className="h-80 space-y-3 overflow-y-auto px-4 py-4 text-sm"
            >
              <AnimatePresence initial={false}>
                {messages.map((message) => (
                  <Motion.div
                    key={message.id}
                    {...bubbleMotion}
                    className={`flex ${
                      message.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl px-3 py-2 leading-relaxed ${
                        message.role === "user"
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white"
                          : "bg-slate-100 text-slate-700"
                      } whitespace-pre-line`}
                    >
                      {message.role === "assistant" ? (
                        <div className="space-y-1">
                          {message.content.split("\n").map((line, lineIndex) => (
                            <p key={`${message.id}-line-${lineIndex}`}>
                              {renderLineWithLinks(line, lineIndex)}
                            </p>
                          ))}
                        </div>
                      ) : (
                        message.content
                      )}
                    </div>
                  </Motion.div>
                ))}
              </AnimatePresence>

              {isLoading && (
                <Motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  className="flex justify-start"
                >
                  <div className="inline-flex items-center gap-1.5 rounded-2xl bg-slate-100 px-3 py-2 text-slate-600">
                    <span className="text-xs font-medium">Thinking</span>
                    {[0, 1, 2].map((dot) => (
                      <Motion.span
                        key={dot}
                        animate={{ y: [0, -2, 0], opacity: [0.4, 1, 0.4] }}
                        transition={{
                          duration: 0.7,
                          repeat: Infinity,
                          delay: dot * 0.12,
                        }}
                        className="h-1.5 w-1.5 rounded-full bg-slate-500"
                      />
                    ))}
                  </div>
                </Motion.div>
              )}
            </div>

            <div className="border-t border-slate-200 px-3 py-2">
              <div className="flex gap-2 overflow-x-auto pb-1">
                {quickPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    onClick={() => submitQuestion(prompt)}
                    disabled={isLoading}
                    className="whitespace-nowrap rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:border-indigo-300 hover:text-indigo-600 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="border-t border-slate-200 p-3"
            >
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ask about projects, services, or contact..."
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 outline-none transition-colors focus:border-indigo-500"
                  disabled={isLoading}
                />
                <Motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="inline-flex items-center justify-center rounded-xl bg-indigo-600 p-2.5 text-white transition-colors hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </Motion.button>
              </div>
            </form>
          </Motion.section>
        )}
      </AnimatePresence>

      <Motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={
          isOpen
            ? { boxShadow: "0 8px 20px rgba(59, 130, 246, 0.22)" }
            : {
                boxShadow: [
                  "0 8px 20px rgba(59, 130, 246, 0.22)",
                  "0 10px 24px rgba(79, 70, 229, 0.32)",
                  "0 8px 20px rgba(59, 130, 246, 0.22)",
                ],
              }
        }
        transition={{
          duration: isOpen ? 0.2 : 2.2,
          repeat: isOpen ? 0 : Infinity,
          ease: "easeInOut",
        }}
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-6 right-4 z-[70] inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-lg"
        aria-label={isOpen ? "Close portfolio chat" : "Open portfolio chat"}
      >
        <MessageCircle className="h-4 w-4" />
        {isOpen ? "Close Chat" : "Ask Site"}
      </Motion.button>
    </>
  );
}
