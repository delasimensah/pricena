import React from "react";
import { Typography, Box, MenuItem } from "@mui/material";
import HoverMenu from "material-ui-popup-state/HoverMenu";
import {
  usePopupState,
  bindHover,
  bindMenu,
} from "material-ui-popup-state/hooks";
import colors from "@lib/colors";

const SubMenu = ({ title, sub }) => {
  const popupState = usePopupState({
    popupId: "subMenu",
    variant: "popover",
  });

  return (
    <>
      <MenuItem
        classes={{
          root: `hover:bg-transparent`,
        }}
        sx={{
          "&:hover": {
            color: colors.main,
          },
        }}
        {...bindHover(popupState)}
      >
        {title}
      </MenuItem>

      <HoverMenu
        {...bindMenu(popupState)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        classes={{
          paper: "w-80 rounded-none",
        }}
      >
        {sub.map((cat, idx) => {
          return (
            <MenuItem
              key={idx}
              classes={{
                root: `hover:bg-transparent`,
              }}
              sx={{
                "&:hover": {
                  color: colors.main,
                },
              }}
            >
              {cat}
            </MenuItem>
          );
        })}
      </HoverMenu>
    </>
  );
};

export default SubMenu;
