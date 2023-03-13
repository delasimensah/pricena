import { useContext, useCallback } from "react";
import { MenuItem } from "@mui/material";
import { Context } from ".";

const CascadingMenuItem = ({ onClick, ...props }) => {
  const { rootPopupState } = useContext(Context);

  if (!rootPopupState) throw new Error("must be used inside a CascadingMenu");

  const handleClick = useCallback(
    (event) => {
      rootPopupState.close(event);
      if (onClick) onClick(event);
    },
    [rootPopupState, onClick]
  );

  return (
    <MenuItem
      {...props}
      onClick={handleClick}
      className="hover:bg-transparent hover:text-[#3498d8]"
    />
  );
};

export default CascadingMenuItem;
