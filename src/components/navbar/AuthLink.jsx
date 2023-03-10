import { useState } from "react";
import Link from "next/link";
import { Menu, MenuItem, Typography } from "@mui/material";

const AuthLink = () => {
  const [loginDropdown, setLoginDropdown] = useState(null);

  const showLoginMenu = (e) => {
    setLoginDropdown(e.currentTarget);
  };

  const hideLoginMenu = () => {
    setLoginDropdown(null);
  };

  return (
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
  );
};

export default AuthLink;
