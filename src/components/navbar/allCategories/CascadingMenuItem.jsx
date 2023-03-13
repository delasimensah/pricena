import { useContext } from "react";
import { MenuItem } from "@mui/material";
import { Context } from ".";

const CascadingMenuItem = ({ onClick, ...props }) => {
  const { rootPopupState } = useContext(Context);

  return (
    <MenuItem
      {...props}
      onClick={onClick}
      className="hover:bg-transparent hover:text-[#3498d8]"
    />
  );
};

export default CascadingMenuItem;
