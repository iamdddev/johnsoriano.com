import Button from "components/button";
import type { NextPage } from "next";
import Hero from "components/hero";
import useDarkMode from "hooks/useDarkMode";

const Home: NextPage = () => {
  const [theme, setTheme] = useDarkMode();
  return (
    <div>
      <Hero />
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Light</button>
    </div>
  );
};

export default Home;
