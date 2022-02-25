import Navigation from "components/navigation";
import type { AppProps } from "next/app";
import { ThemeProvider } from "providers/ThemeProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Navigation />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
