import React from 'react';

type IContainer = {
  children: React.ReactNode;
  className?: string;
};

const Container = ({ children, className }: IContainer) => {
  return (
    <div className={`container mx-auto lg:px-0 px-2 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
