import React from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { Typography, Box, Menu, MenuItem } from "@mui/material";

const MultiLevelDropdown = () => {
  return (
    <div>
      <Box className="flex items-center space-x-2">
        <Typography className="uppercase text-sm text-[#3498D8] font-semibold">
          All Categories
        </Typography>

        <IoChevronDownOutline color="#3498D8" />
      </Box>
    </div>
  );
};

export default MultiLevelDropdown;
