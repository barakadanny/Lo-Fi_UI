import React, { useState } from "react";

interface MainSideHeaderProps {
  children: React.ReactNode;
}

const MainSideHeader: React.FC<MainSideHeaderProps> = ({ children }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible((prevState) => !prevState);
  };

  return (
    <div>
      <button
        onClick={toggleSidebar}
        aria-controls="sidebar-multi-level-sidebar"
        type="button"
        className={`fixed z-50 inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-700 bg-gray-300 hover:bg-[#877979] rounded-lg sm:hidden transition-transform ${
          isSidebarVisible ? "translate-x-28" : "translate-x-0"
        }`}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <aside
        id="sidebar-multi-level-sidebar"
        className={`fixed top-0 left-0 z-40 w-28 h-screen transition-transform ${
          isSidebarVisible ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
      >
        {children}
      </aside>
    </div>
  );
};

export default MainSideHeader;
