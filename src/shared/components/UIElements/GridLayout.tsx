import React, { ReactNode } from "react";

interface GridLayoutProps {
  children: ReactNode;
  cols: number;
  gap: number;
  rowGap?: number;
  colGap?: number;
  className?: string;
}

const GridLayout: React.FC<GridLayoutProps> = ({
  children,
  cols,
  gap,
  // rowGap = gap,
  className,
}) => {
  return (
    <div className={`grid grid-cols-${cols} gap-${gap} ${className}`}>
      {children}
    </div>
  );
};

export default GridLayout;
