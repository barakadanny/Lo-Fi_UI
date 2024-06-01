import React from "react";

interface MainSideHeaderProps {
  children: React.ReactNode;
}

const MainSideHeader: React.FC<MainSideHeaderProps> = ({ children }) => {
  return (
    <aside className="fixed top-0 left-0 z-40 w-28 h-screen transition-transform -translate-x-full sm:translate-x-0">
      {children}
    </aside>
  );
};

export default MainSideHeader;
