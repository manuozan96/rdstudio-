import React, { ReactNode, CSSProperties } from "react";
import "../styles/Layout.module.css"

interface LayoutProps {
  children: ReactNode;
  background?: string;
  style?: CSSProperties;
}

const Layout: React.FC<LayoutProps> = ({ children, background, style }) => {
  return (
    <div className="layout" style={{ background: background, ...style }}>
      {children}
    </div>
  );
};

export default Layout;
