import Footer from "components/footer";
import Navigation from "components/navigation";
import type { AppProps } from "next/app";
import { ThemeProvider } from "providers/ThemeProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
