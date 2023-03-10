import { useState } from "react";
import { IoCaretDownOutline } from "react-icons/io5";
import { MenuItem, Box, ListItemIcon, ListItemText } from "@mui/material";
import HoverMenu from "material-ui-popup-state/HoverMenu";
import {
  usePopupState,
  bindHover,
  bindMenu,
} from "material-ui-popup-state/hooks";
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
  const popupState = usePopupState({
    variant: "popover",
    popupId: "countrySelect",
  });

  const [selectedCountry, setSelectedCountry] = useState(0);

  const selectCountry = (idx) => {
    setSelectedCountry(idx);
    popupState.close();
  };

  return (
    <>
      <Box
        className="flex items-center cursor-pointer"
        {...bindHover(popupState)}
      >
        <Image
          src={countries[selectedCountry].flag}
          alt=""
          width={20}
          height={20}
          className="border"
        />

        <IoCaretDownOutline />
      </Box>

      <HoverMenu
        {...bindMenu(popupState)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
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
      </HoverMenu>
    </>
  );
};

export default CountrySelect;
