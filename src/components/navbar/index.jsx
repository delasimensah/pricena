import { useState } from "react";
import { IoSearchOutline, IoCaretDownOutline } from "react-icons/io5";
import {
  Menu,
  MenuItem,
  Typography,
  Box,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";

import Logo from "./Logo";
import SearchInput from "./SearchInput";
import MultiLevelDropdown from "./MultiLevelDropdown";
import AuthLink from "./AuthLink";
import CountrySelect from "./CountrySelect";
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

const Navbar = () => {
  return (
    <div className="px-5 bg-white md:px-10 lg:px-20">
      <div className="flex items-center py-4">
        <Logo />

        <SearchInput />

        <Box className="flex items-center space-x-5">
          <AuthLink />

          <CountrySelect />
        </Box>
      </div>

      <Box className="flex items-center space-x-10 ">
        <MultiLevelDropdown />

        <Box className="flex items-center flex-1 space-x-10">
          {links.map((link, idx) => {
            return <LinkTab key={idx} title={link} />;
          })}
        </Box>

        <Box>
          <LinkTab title="Coupons & Offers" />
        </Box>
      </Box>
    </div>
  );
};

export default Navbar;
