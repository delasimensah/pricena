import { useState } from "react";
import {
  IoSearchOutline,
  IoChevronDownOutline,
  IoCaretDownOutline,
} from "react-icons/io5";
import {
  Menu,
  MenuItem,
  Typography,
  Box,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";

import uae from "@assets/UAE.jpg";
import saudi from "@assets/saudi.png";
import egypt from "@assets/egypt.png";
import kuwait from "@assets/kuwait.jpeg";
import qatar from "@assets/qatar.png";

const countries = [
  { name: "UAE", flag: uae },
  { name: "Saudi", flag: saudi },
  { name: "Egypt", flag: egypt },
  { name: "Kuwait", flag: kuwait },
  { name: "Qatar", flag: qatar },
];
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
  const [loginDropdown, setLoginDropdown] = useState(null);
  const [countryDropdown, setCountryDropdown] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(0);

  const showLoginMenu = (e) => {
    setLoginDropdown(e.currentTarget);
  };

  const hideLoginMenu = () => {
    setLoginDropdown(null);
  };

  const showCountryMenu = (e) => {
    setCountryDropdown(e.currentTarget);
  };

  const hideCountryMenu = () => {
    setCountryDropdown(null);
  };

  const selectCountry = (idx) => {
    setSelectedCountry(idx);
    hideCountryMenu();
  };

  return (
    <div className="px-5 bg-white md:px-10 lg:px-20">
      <div className="flex items-center py-4">
        <Link href="/" className="pr-20 text-2xl font-semibold">
          Pricena Logo
        </Link>

        <div className="flex-1">
          <div className="w-[70%] border border-gray-400 flex items-center lg:pr-5">
            <input
              type="search"
              className="flex-1 p-2 focus:outline-none placeholder:text-sm"
              placeholder="Search 19.1 Million products from 152 stores in UAE"
            />

            <IoSearchOutline size={20} />
          </div>
        </div>

        <div className="flex items-center space-x-5">
          <div>
            <Link href="/product/samsung">
              <Typography className="text-sm text-[#888]">
                Log In / Sign Up
              </Typography>
            </Link>

            <div
              className="border border-transparent"
              onMouseEnter={showLoginMenu}
            ></div>

            <Menu
              anchorEl={loginDropdown}
              open={Boolean(loginDropdown)}
              onClose={hideLoginMenu}
            >
              <MenuItem onClick={hideLoginMenu}>My Reviews</MenuItem>
              <MenuItem onClick={hideLoginMenu}>My Favourites</MenuItem>
              <MenuItem onClick={hideLoginMenu}>My History</MenuItem>
              <MenuItem onClick={hideLoginMenu}>My Alerts</MenuItem>
            </Menu>
          </div>

          <Box>
            <Box className="flex items-center" onMouseEnter={showCountryMenu}>
              <Image
                src={countries[selectedCountry].flag}
                alt=""
                width={20}
                height={20}
                className="border"
              />

              <IoCaretDownOutline />
            </Box>

            <Menu
              anchorEl={countryDropdown}
              open={Boolean(countryDropdown)}
              onClose={hideCountryMenu}
            >
              {countries.map((country, idx) => {
                return (
                  <MenuItem key={idx} onClick={() => selectCountry(idx)}>
                    <ListItemIcon>
                      <Image
                        src={country.flag}
                        alt=""
                        width={20}
                        height={20}
                        className="border"
                      />
                    </ListItemIcon>
                    <ListItemText>{country.name}</ListItemText>
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>
        </div>
      </div>

      <Box className="flex items-center space-x-10 ">
        <Box className="flex items-center space-x-2">
          <Typography className="uppercase text-sm text-[#3498D8] font-semibold">
            All Categories
          </Typography>

          <IoChevronDownOutline color="#3498D8" />
        </Box>

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

function LinkTab({ title }) {
  return (
    <Link href="#" className="">
      <Typography className="py-3 border-b-2 border-b-transparent hover:border-b-[#3498D8] hover:text-[#3498D8]">
        {title}
      </Typography>
    </Link>
  );
}

export default Navbar;
