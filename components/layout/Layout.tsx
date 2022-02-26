import React from "react";
import { LayoutProps } from ".";

export const Layout: React.FC<LayoutProps> = ({ children, navigation, footer }): React.ReactElement => {
  return (
    <>
      {navigation}
      <div className="max-w-2xl mx-auto px-6 md:px-0">{children}</div>
      {footer}
    </>
  );
};

export default Layout;
