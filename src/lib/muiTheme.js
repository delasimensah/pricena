import { createTheme } from "@mui/material/styles";

const getTheme = (fontFamily) => {
  return createTheme({
    typography: {
      fontFamily,
    },
    palette: {
      primary: {
        main: "#3498DB",
      },
    },
  });
};

export default getTheme;
