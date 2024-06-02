import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="p-4 sm:ml-28">
      <section>
        <div className=" mx-auto max-w-7xl ">
          <div className="p-4">{children}</div>
        </div>
      </section>
    </div>
  );
};

export default Container;
