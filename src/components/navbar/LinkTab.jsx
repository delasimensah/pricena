import React from "react";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";

const LinkTab = ({ title }) => {
  const { push } = useRouter();

  return (
    <Typography
      className={`py-3 border-b-2 border-b-transparent hover:border-b-[#3498d8] hover:text-[#3498d8] cursor-pointer`}
      onClick={() => push("#")}
    >
      {title}
    </Typography>
  );
};

export default LinkTab;
