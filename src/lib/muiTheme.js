import { createTheme } from "@mui/material/styles";
import colors from "./colors";

const getTheme = (fontFamily) => {
  return createTheme({
    typography: {
      fontFamily,
    },
    palette: {
      primary: {
        main: colors.main,
      },
    },
  });
};

export default getTheme;
