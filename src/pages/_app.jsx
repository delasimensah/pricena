import { Figtree } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import getTheme from "@lib/muiTheme";

import "@styles";

const font = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree",
});

const App = ({ Component, pageProps }) => {
  const theme = getTheme(font.style.fontFamily);

  return (
    <>
      <ThemeProvider theme={theme}>
        <style jsx global>{`
          html {
            font-family: ${font.style.fontFamily};
          }
        `}</style>

        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
