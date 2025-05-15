// src/components/layout/MobileMenu.jsx

import { Dialog, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { GlobeAltIcon } from "@heroicons/react/24/solid";
import { sections, socialLinks } from "../../utils/constant";

export default function MobileMenu({ isOpen, onClose, currentSection }) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="lg:hidden">
      <div className="fixed inset-0 z-50 bg-black/30" />
      <DialogPanel
        className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 bg-white text-gray-900 sm:ring-gray-900/10"
      >
        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5 flex items-center">
            <div className="h-8 w-8 rounded-full flex items-center justify-center bg-indigo-600 text-white">
              <GlobeAltIcon className="h-5 w-5" />
            </div>
            <span className="ml-2 font-bold tracking-tight">Dan</span>
          </a>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-2.5 text-gray-700 hover:text-black"
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {sections.map((href) => {
                const name =
                  href === "#home"
                    ? "Home"
                    : href.replace("#", "").replace(/^\w/, (c) => c.toUpperCase());
                return (
                  <a
                    key={href}
                    href={href}
                    onClick={onClose}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold ${
                      currentSection === href
                        ? "bg-indigo-50 text-indigo-600"
                        : "text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    {name}
                  </a>
                );
              })}
            </div>

            {/* Mobile Social Links */}
            <div className="py-6">
              <div className="flex justify-start space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-900"
                  >
                    <span className="sr-only">{link.name}</span>
                    <i className={`fab fa-${link.icon} text-xl`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  );
}