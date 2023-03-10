import { createContext } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { Typography, Box, MenuItem } from "@mui/material";
import { usePopupState, bindHover } from "material-ui-popup-state/hooks";
import colors from "@lib/colors";

import CascadingMenu from "./CascadingMenu";
import CascadingSubMenu from "./CascadingSubMenu";

// const categories = [
//   "Mobile, Tablet & Wearables",
//   "Computers",
//   "Cameras",
//   "TV & Video",
//   "Video Games & Consoles",
//   "Audio",
//   "Office Supplies",
//   "Home Appliances",
//   "Personal Care & Beauty",
//   "Car Parts & Accessories",
//   "Men Fashion",
//   "Women Fashion",
//   "Books",
//   "Sports Equipment",
// ];

const categories = [
  {
    id: "mobiles-tablets-wearables",
    title: "Mobiles, Tablets & Wearables",
    sub: [
      {
        title: "Mobile Phones",
      },
    ],
  },
  {
    id: "computers",
    title: "Computers",
    sub: [
      {
        title: "Laptops",
      },
    ],
  },
];

export const Context = createContext({
  parentPopupState: null,
  rootPopupState: null,
});

const AllCategories = () => {
  const popupState = usePopupState({
    popupId: "allCategories",
    variant: "popover",
  });

  return (
    <>
      <Box
        className="flex items-center h-full py-4 space-x-2 cursor-pointer"
        {...bindHover(popupState)}
      >
        <Typography
          className={`uppercase text-sm font-semibold`}
          sx={{
            color: colors.main,
          }}
        >
          All Categories
        </Typography>

        <IoChevronDownOutline color={colors.main} />
      </Box>

      <CascadingMenu
        popupState={popupState}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        {categories.map((cat) => {
          return (
            <CascadingSubMenu key={cat.id} title={cat.title} popupId={cat.id}>
              {cat.sub.map((sub, idx) => {
                return <MenuItem key={idx}>{sub.title}</MenuItem>;
              })}
            </CascadingSubMenu>
          );
        })}
      </CascadingMenu>
    </>
  );
};

export default AllCategories;
