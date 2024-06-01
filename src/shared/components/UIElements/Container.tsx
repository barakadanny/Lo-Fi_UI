import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="p-4 sm:ml-28">
      <div className="p-4">{children}</div>
    </div>
  );
};

export default Container;
