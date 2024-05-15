import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

function Aside() {
  return (
    <aside
      id="logo-sidebar"
      className="fixed top-0 left-0 z-40 w-60 h-screen pt-20 transition-transform -translate-x-full bg-white md:translate-x-0 dark:bg-ebony-950"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-ebony-950">
        <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-700">
          <li>
            <Link
              to={ROUTES.MARKETING}
              className="block border-l pl-4 py-2 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
            >
              <span className="ms-3">Marketing</span>
            </Link>
          </li>
          <li>
            <Link
              to={ROUTES.SOCIAL}
              className="block border-l pl-4 py-2 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">Social</span>
            </Link>
          </li>
          <li>
            <Link
              to={ROUTES.DEVELOPMENT}
              className="block border-l pl-4 py-2 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">Development</span>
            </Link>
          </li>
          <li>
            <Link
              to={ROUTES.DESIGN}
              className="block border-l pl-4 py-2 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
            >
              <span className="flex-1 ms-3 whitespace-nowrap">Design</span>
            </Link>
          </li>
        </ul>
        <div
          id="dropdown-cta"
          className="p-4 mt-6 rounded-lg bg-blue-50 dark:bg-blue-900"
          role="alert"
        >
          <div className="flex items-center mb-3">
            <span className="bg-orange-100 text-orange-800 text-sm font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">
              Beta
            </span>
            <button
              type="button"
              className="ms-auto -mx-1.5 -my-1.5 bg-blue-50 inline-flex justify-center items-center w-6 h-6 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800"
              data-dismiss-target="#dropdown-cta"
              aria-label="Close"
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-2.5 h-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
          <p className="mb-3 text-sm text-blue-800 dark:text-blue-400">
            Preview the new Flowbite dashboard navigation! You can turn the new
            navigation off for a limited time in your profile.
          </p>
          <a
            className="text-sm text-blue-800 underline font-medium hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
            href="#"
          >
            Turn new navigation off
          </a>
        </div>
      </div>
    </aside>
  );
}

export default Aside;
