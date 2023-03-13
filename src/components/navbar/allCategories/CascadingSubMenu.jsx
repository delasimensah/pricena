import { useContext } from "react";
import { Context } from ".";
import { MenuItem } from "@mui/material";
import CascadingMenu from "./CascadingMenu";
import { usePopupState, bindHover } from "material-ui-popup-state/hooks";

const CascadingSubMenu = ({ title, popupId, ...props }) => {
  const { parentPopupState } = useContext(Context);

  const popupState = usePopupState({
    popupId,
    variant: "popover",
    parentPopupState,
  });

  return (
    <>
      <MenuItem
        {...bindHover(popupState)}
        className="hover:bg-transparent hover:text-[#3498d8]"
      >
        <span className="flex-1">{title}</span>
      </MenuItem>

      <CascadingMenu
        {...props}
        classes={{ ...props.classes }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        popupState={popupState}
      />
    </>
  );
};

export default CascadingSubMenu;
