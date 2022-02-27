import { useEffect, useState } from "react";
import Link from "next/link";
import { Switch } from "@headlessui/react";
import { NavigationProps } from ".";
import useDarkMode from "hooks/useDarkMode";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export const Navigation: React.FC<NavigationProps> = (): React.ReactElement => {
  const [theme, setTheme] = useDarkMode();
  const [enabled, setEnabled] = useState<boolean>(false);

  useEffect(() => {
    setTheme(enabled ? "dark" : "light");
  }, [enabled, setTheme]);

  useEffect(() => {
    if (theme === "dark") setEnabled(true);
  }, [theme]);

  return (
    <div className=" bg-white border-b border-b-gray-200 dark:bg-black w-full sticky top-0 z-10 dark:border-b dark:border-gray-800">
      <nav className="flex items-center justify-between max-w-2xl mx-auto px-6 md:px-0 py-6">
        <a href="#skip" className="sr-only focus:not-sr-only">
          Skip to content
        </a>
        <div className="space-x-8">
          <Link href="/">
            <a className="text-gray-800 dark:text-gray-100 text-md font-bold">Home</a>
          </Link>
          <Link href="/posts">
            <a className="text-gray-800 dark:text-gray-100 text-md font-bold">Posts</a>
          </Link>
          <Link href="/metrics">
            <a className="text-gray-800 dark:text-gray-100 text-md font-bold">Metrics</a>
          </Link>
          <Link href="/snippets">
            <a className="hidden md:inline text-gray-800 dark:text-gray-100 text-md font-bold">Snippets</a>
          </Link>
          <Link href="/projects">
            <a className="text-gray-800 dark:text-gray-100 text-md font-bold">Projects</a>
          </Link>
        </div>
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={classNames(
            enabled ? "bg-purple-600" : "bg-gray-200",
            "relative inline-flex flex-shrink-0 h-5 w-10 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          )}
        >
          <span className="sr-only">Use setting</span>
          <span
            className={classNames(
              enabled ? "translate-x-5" : "translate-x-0",
              "pointer-events-none relative inline-block h-4 w-4 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
            )}
          >
            <span
              className={classNames(
                enabled ? "opacity-0 ease-out duration-100" : "opacity-100 ease-in duration-200",
                "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
              )}
              aria-hidden="true"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </span>
            <span
              className={classNames(
                enabled ? "opacity-100 ease-in duration-200" : "opacity-0 ease-out duration-100",
                "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
              )}
              aria-hidden="true"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </span>
          </span>
        </Switch>
      </nav>
    </div>
  );
};

export default Navigation;
