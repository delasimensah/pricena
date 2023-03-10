import React from "react";
import { Box } from "@mui/material";

import LinkTab from "./LinkTab";

const links = [
  "Codes",
  "Flip4",
  "Galaxy S23",
  "Fold4",
  "iPhone 14",
  "PS5",
  "iPhone 14 Pro",
  "Galaxy Watch5",
  "P40 Pro",
  "Price Drops",
];

const Links = () => {
  return (
    <Box className="flex items-center flex-1 space-x-10">
      {links.map((link, idx) => {
        return <LinkTab key={idx} title={link} />;
      })}
    </Box>
  );
};

export default Links;
