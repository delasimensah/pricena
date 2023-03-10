import React from "react";
import { Typography } from "@mui/material";
import Link from "next/link";

const LinkTab = ({ title }) => {
  const primary = "#3498D8";

  return (
    <Link href="#" className="">
      <Typography
        className={`py-3 border-b-2 border-b-transparent hover:border-b-[${primary}] hover:text-[${primary}]`}
      >
        {title}
      </Typography>
    </Link>
  );
};

export default LinkTab;
