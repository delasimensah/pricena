import { useState } from "react";
import { IoCaretDownOutline } from "react-icons/io5";
import { Menu, MenuItem, Box, ListItemIcon, ListItemText } from "@mui/material";
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

const CountrySelect = () => {
  const [countryDropdown, setCountryDropdown] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(0);

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
  );
};

export default CountrySelect;
