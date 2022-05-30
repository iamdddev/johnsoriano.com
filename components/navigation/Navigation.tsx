import { useEffect, useState } from "react";
import Link from "next/link";
import { NavigationProps } from ".";
import useDarkMode from "hooks/useDarkMode";
import clsx from "clsx";

export const Navigation: React.FC<NavigationProps> = ({ bordered, links, branded }): React.ReactElement => {
  const [theme, setTheme] = useDarkMode();
  const [enabled, setEnabled] = useState<boolean>(false);

  useEffect(() => {
    setTheme(enabled ? "dark" : "light");
  }, [enabled, setTheme]);

  useEffect(() => {
    if (theme === "dark") setEnabled(true);
  }, [theme]);

  return (
    <div
      className={clsx(
        {
          "shadow-md": bordered,
          "border-b": bordered,
          "border-slate-200": bordered,
          "dark:border-slate-700": bordered,
          "shadow-slate-100": bordered,
          "dark:shadow-slate-800": bordered,
        },
        "w-full sticky top-0 z-10 bg-white dark:bg-slate-900"
      )}
    >
      <nav className={clsx("max-w-2xl mx-auto px-6 md:px-0 py-6", branded && "sm:flex sm:items-center sm:justify-between")}>
        <a href="#skip" className="sr-only focus:not-sr-only">
          Skip to content
        </a>

        {branded && (
          <div className="hidden sm:block">
            <Link href="/">
              <a className="text-slate-700 dark:text-slate-50 text-xs font-extrabold">John Soriano</a>
            </Link>
          </div>
        )}
        <div className="flex items-center justify-between space-x-6">
          <div className=" space-x-6">
            {links.map((link) => (
              <Link key={link.text} href={link.link}>
                <a className="text-slate-700 dark:text-slate-100 text-md font-bold">{link.text}</a>
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Link href="/about">
              <a className="flex text-[0.8em] items-center bg-pink-500 hover:bg-blue-light text-slate-50 font-bold py-1 px-2 border-pink-900 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="hidden md:block">Available</span>
              </a>
            </Link>
            {enabled && (
              <svg
                onClick={() => setEnabled(false)}
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 cursor-pointer text-slate-500 hover:text-slate-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            )}
            {!enabled && (
              <svg
                onClick={() => setEnabled(true)}
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 hover:text-slate-800 cursor-pointer text-slate-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
