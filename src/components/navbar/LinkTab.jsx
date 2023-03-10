import React from "react";
import { Typography } from "@mui/material";
import colors from "@lib/colors";
import { useRouter } from "next/router";

const LinkTab = ({ title }) => {
  const { push } = useRouter();

  return (
    <Typography
      className={`py-3 border-b-2 border-b-transparent hover:border-b-[${colors.main}] hover:text-[${colors.main}] cursor-pointer`}
      onClick={() => push("#")}
    >
      {title}
    </Typography>
  );
};

export default LinkTab;
