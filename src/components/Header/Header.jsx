import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { ROUTES } from './../../utils/routes';

import LOGO from '/Eiseit-logo.svg';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav
      className={`sticky top-0 z-50 w-full flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 ${isScrolled ? 'backdrop-blur-sm dark:bg-ebony-950/25' : 'dark:bg-transparent'}`}
    >
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open sidebar</span>
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m9 5 7 7-7 7"
                />
              </svg>
            </button>
            <Link className="flex ms-2 md:me-24" to={ROUTES.HOME}>
              <img src={LOGO} alt="EISEit AS Logo-icon" />
              <div className="font-allerta ml-2 self-center text-xl sm:text-2xl whitespace-nowrap dark:text-white">
                EISE<span className="text-teal-500">i</span>t
              </div>
            </Link>
          </div>
          <div className="flex items-center">
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
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
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0   dark:border-gray-700">
              <li>
                <NavLink
                  to={ROUTES.HOME}
                  className={({ isActive }) =>
                    `font-poppins font-normal block py-2 px-3 rounded md:p-0 ${isActive ? 'text-teal-500' : 'text-slate-200'} hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-500 dark:hover:bg-gray-700 dark:hover:text-teal-500 md:dark:hover:bg-transparent`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={ROUTES.ABOUT}
                  className={({ isActive }) =>
                    `font-poppins font-normal block py-2 px-3 rounded md:p-0 ${isActive ? 'text-teal-500' : 'text-slate-200'} hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-500 dark:hover:bg-gray-700 dark:hover:text-teal-500 md:dark:hover:bg-transparent`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={ROUTES.SERVICES}
                  className={({ isActive }) =>
                    ` font-poppins font-normal block py-2 px-3 rounded md:p-0 ${isActive ? 'text-teal-500' : 'text-slate-200'} hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-500 dark:hover:bg-gray-700 dark:hover:text-teal-500 md:dark:hover:bg-transparent`
                  }
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={ROUTES.CONTACT}
                  className={({ isActive }) =>
                    `font-poppins font-normal block py-2 px-3 rounded md:p-0 ${isActive ? 'text-teal-500' : 'text-slate-200'} hover:bg-gray-100 md:hover:bg-transparent md:hover:text-teal-500 dark:hover:bg-gray-700 dark:hover:text-teal-500 md:dark:hover:bg-transparent`
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
