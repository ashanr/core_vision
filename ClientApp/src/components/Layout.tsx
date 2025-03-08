import React from 'react';
import NavMenu from './NavMenu';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <NavMenu />
      <div className="container">
        {children}
      </div>
    </div>
  );
}

export default Layout;
