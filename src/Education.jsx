import { BriefcaseIcon, AcademicCapIcon } from "@heroicons/react/20/solid";

export default function ExperienceAndEducation() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Decorative background (optional) */}
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        {/* Heading */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold text-indigo-600">Resume</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Experience & Education
              </h1>
              <p className="mt-6 text-xl text-gray-700">
                Here’s a quick summary of my background in the tech industry and
                my educational journey.
              </p>
            </div>
          </div>
        </div>

        {/* Experience / Education Content */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-gray-700 lg:max-w-lg">
              <ul className="space-y-10">
                {/* Experience Item */}
                <li className="flex gap-x-4">
                  <BriefcaseIcon className="mt-1 h-6 w-6 text-indigo-600 flex-none" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Web Intern – Highly Succeed Inc.
                    </h3>
                    <p className="text-sm text-gray-600">March 2025 – Present</p>
                    <p className="mt-1 text-sm">
                      Assisted in building internal tools using PHP and Laravel;
                      collaborated with the UI/UX team.
                    </p>
                  </div>
                </li>

                {/* Education Item */}
                <li className="flex gap-x-4">
                  <AcademicCapIcon className="mt-1 h-6 w-6 text-indigo-600 flex-none" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      BS Information Technology – PUP
                    </h3>
                    <p className="text-sm text-gray-600">
                      2020 – 2025 (Expected)
                    </p>
                    <p className="mt-1 text-sm">
                      Major in Web and Mobile Development. Active in academic
                      competitions and IT orgs.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Optional Image */}
        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            alt="Working illustration"
            src="/assets/dan.jpeg"
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
      </div>
    </div>
  );
}
