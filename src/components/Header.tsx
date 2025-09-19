import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-white/90 shadow-md shadow-gray-200/50 ">
      <nav className="relative py-4 flex justify-between items-center w-[92%] mx-auto">
        <div>
          <p className=" text-xl font-bold bg-gradient-to-r from-slate-600 to-gray-400 bg-clip-text text-transparent">
            Emerson.dev
          </p>
        </div>
        <div className="relative">
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg 
                         hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`nav-links duration-300 absolute bg-white md:static md:min-h-fit min-h-[20vh] right-4 md:right-0 md:w-auto w-auto flex items-center px-5 z-50 md:pl-0 transition-all overflow-hidden ${
            isOpen
              ? "top-full opacity-100 rounded-md shadow-lg"
              : "-top-[110%] opacity-0"
          } md:opacity-100 md:top-0`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-6 p-4 md:p-0">
            <li>
              <a className="hover:text-gray-500" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
