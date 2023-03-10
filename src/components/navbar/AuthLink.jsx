import { MenuItem, Typography } from "@mui/material";
import HoverMenu from "material-ui-popup-state/HoverMenu";
import {
  usePopupState,
  bindHover,
  bindMenu,
} from "material-ui-popup-state/hooks";
import { useRouter } from "next/router";

const AuthLink = () => {
  const { push } = useRouter();
  const popupState = usePopupState({
    variant: "popover",
    popupId: "authDropdown",
  });

  return (
    <>
      <Typography
        className="text-sm text-[#888] cursor-pointer"
        {...bindHover(popupState)}
        onClick={() => {
          push("/auth");
          popupState.close();
        }}
      >
        Log In / Sign Up
      </Typography>

      <HoverMenu
        {...bindMenu(popupState)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <MenuItem onClick={popupState.close}>My Reviews</MenuItem>
        <MenuItem onClick={popupState.close}>My Favourites</MenuItem>
        <MenuItem onClick={popupState.close}>My History</MenuItem>
        <MenuItem onClick={popupState.close}>My Alerts</MenuItem>
      </HoverMenu>
    </>
  );
};

export default AuthLink;
