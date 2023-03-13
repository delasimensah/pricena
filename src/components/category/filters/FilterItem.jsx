import { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import {
  Box,
  Divider,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Collapse,
} from "@mui/material";

const FilterItem = ({ title, children }) => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton
        onClick={handleClick}
        className="hover:bg-transparent"
        dense
        disableRipple
      >
        <ListItemIcon
          classes={{
            root: "min-w-0",
          }}
        >
          <IoChevronDownOutline color="#3498d8" />
        </ListItemIcon>

        <ListItemText
          primary={title}
          classes={{
            primary: "font-semibold pl-4",
          }}
        />
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <Box className="px-5 pt-2 pb-5">{children}</Box>
      </Collapse>

      <Divider />
    </>
  );
};

export default FilterItem;
