import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { Menu, MenuItem, Button, Typography } from "@mui/material";
import Link from "next/link";

const countries = ["UAE", "Saudi", "Egypt", "Kuwait", "Qatar"];

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
        <Link href="/" className="pr-20 text-lg">
          Pricena
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
              <Typography>Log In / Sign Up</Typography>
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

          <div>
            <div onMouseEnter={showCountryMenu}>
              {countries[selectedCountry]}
            </div>

            <Menu
              anchorEl={countryDropdown}
              open={Boolean(countryDropdown)}
              onClose={hideCountryMenu}
            >
              {countries.map((country, idx) => {
                return (
                  <MenuItem key={idx} onClick={() => selectCountry(idx)}>
                    {country}
                  </MenuItem>
                );
              })}
            </Menu>
          </div>
        </div>
      </div>

      <div>All Categories</div>
    </div>
  );
};

export default Navbar;
