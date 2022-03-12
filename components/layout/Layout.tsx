import React from "react";
import { LayoutProps } from ".";

export const Layout: React.FC<LayoutProps> = ({ children, navigation, footer }): React.ReactElement => {
  return (
    <div className="bg-gradient-to-r pt-[6px] from-[#3B82F6] via-[#db2777] to-[#9333EA]">
      <div className="bg-slate-50 dark:bg-slate-900 text-white">
        {navigation}
        <div className="max-w-2xl mx-auto px-6 md:px-0">{children}</div>
        {footer}
      </div>
    </div>
  );
};

export default Layout;
