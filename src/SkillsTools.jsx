const posts = [
  {
    id: 1,
    title: "Frontend Development",
    href: "#",
    description:
      "Experienced with React, Tailwind CSS, HTML5, CSS3, JavaScript, and Vite. I build clean, responsive, and interactive user interfaces.",
    category: { title: "Frontend", href: "#" },
    author: {
      name: "React & Tailwind",
      role: "UI/UX Tools",
      href: "#",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/919/919851.png", // React logo
    },
  },
  {
    id: 2,
    title: "Backend Development",
    href: "#",
    description:
      "Skilled in PHP, MySQL, and Node.js. I build secure and scalable APIs, work with databases, and manage server-side logic.",
    category: { title: "Backend", href: "#" },
    author: {
      name: "PHP & MySQL",
      role: "Server-side Tools",
      href: "#",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/919/919830.png", // PHP logo
    },
  },
  {
    id: 3,
    title: "Tools & Platforms",
    href: "#",
    description:
      "Comfortable using Git, GitHub, Figma, Postman, VS Code, and cloud platforms like Hostinger for deploying projects.",
    category: { title: "Tools", href: "#" },
    author: {
      name: "Git & Figma",
      role: "Developer Tools",
      href: "#",
      imageUrl: "https://cdn-icons-png.flaticon.com/512/2111/2111288.png", // GitHub logo
    },
  },
];

export default function ThreeColumn() {
  return (
    <div className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background gradient element - same as in Contact.jsx */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            transform: "scaleX(-1)",
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Skills and Tools
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            A glimpse into the technologies I use to craft efficient and
            beautiful digital experiences.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="group relative isolate flex flex-col justify-between overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/10 px-8 pb-8 pt-16 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-100"
            >
              <div>
                <div className="flex items-center gap-x-4 text-xs">
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-indigo-600 px-3 py-1.5 font-medium text-white hover:bg-indigo-500"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-4 text-xl font-semibold leading-6 text-gray-900 group-hover:text-indigo-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {post.description}
                  </p>
                </div>
              </div>

              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src={post.author.imageUrl}
                  alt=""
                  className="h-10 w-10 rounded-full bg-gray-100"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-500">{post.author.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
