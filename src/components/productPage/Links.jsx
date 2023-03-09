import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Link from "next/link";

const menuLinks = [
  "Compare Prices",
  "Videos",
  "Price Tracking",
  "Specs",
  "Ratings",
];

const Links = () => {
  const { palette } = useTheme();
  const [active, setActive] = useState("Compare Prices");

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      {menuLinks.map((link, idx) => {
        return (
          <Box
            key={idx}
            sx={{
              borderTop:
                active === link
                  ? `3px solid ${palette.primary.main}`
                  : "3px solid transparent",
              marginRight: "20px",
              paddingY: "10px",
              color: active === link ? "#888" : "#aaa",
              fontWeight: active === link ? 700 : 400,

              "&:hover": {
                borderTop: `3px solid ${palette.primary.main}`,
              },
            }}
          >
            <Link href="#">
              <Typography>{link}</Typography>
            </Link>
          </Box>
        );
      })}
    </Box>
  );
};

export default Links;
