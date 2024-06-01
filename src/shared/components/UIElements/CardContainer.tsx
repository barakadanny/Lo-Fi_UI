import React from "react";

interface CardContainerProps {
  children: React.ReactNode;
  className?: string;
}

const CardContainer: React.FC<CardContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`p-4 border border-gray-300 rounded-2xl ${className}`}>
      <div>{children}</div>
    </div>
  );
};

export default CardContainer;
