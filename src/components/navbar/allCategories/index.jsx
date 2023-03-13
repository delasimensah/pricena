import { createContext, Fragment } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { Typography, Box, MenuItem } from "@mui/material";
import { usePopupState, bindHover } from "material-ui-popup-state/hooks";
import colors from "@lib/colors";
import { useRouter } from "next/router";

import CascadingMenu from "./CascadingMenu";
import CascadingSubMenu from "./CascadingSubMenu";
import CascadingMenuItem from "./CascadingMenuItem";
import { ROUTES_MANIFEST } from "next/dist/shared/lib/constants";

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
        id: "mobile-phones",
        title: "Mobile Phones",
      },
      {
        id: "mobile-tablet-accessories",
        title: "Mobile & Tablet Accessories",
        sub: [
          {
            id: "cases-cover-skins",
            title: "Cases, Covers & Skins",
          },
          {
            id: "screen-protectors",
            title: "Screen Protectors",
          },
        ],
      },
    ],
  },
  {
    id: "computers",
    title: "Computers",
    sub: [
      {
        id: "laptops",
        title: "Laptops",
      },
      {
        id: "printers-inks",
        title: "Printers & Inks",
        sub: [
          {
            id: "printers",
            title: "Printers",
          },
          {
            id: "inks-toners",
            title: "Inks & Toners",
          },
        ],
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

  const {replace} = useRouter();
  

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
            <CascadingSubMenu title={cat.title} key={cat.id} popupId={cat.id}>
              {cat.sub.map((sub) => {
                return sub.sub === undefined ? (
                  <CascadingMenuItem
                    key={sub.id}
                    onClick={() => {
                      console.log(cat.id);
                      console.log(sub.id);
                    }}
                  >
                    {sub.title}
                  </CascadingMenuItem>
                ) : (
                  <CascadingSubMenu
                    key={sub.id}
                    title={sub.title}
                    popupId={sub.id}
                  >
                    {sub.sub.map((sub) => {
                      return (
                        <CascadingMenuItem key={sub.id}>
                          {sub.title}
                        </CascadingMenuItem>
                      );
                    })}
                  </CascadingSubMenu>
                );
              })}
            </CascadingSubMenu>
          );
        })}

        {/* <CascadingSubMenu
          popupId="mobiles-tablets-wearables"
          title="Mobile, Tablet & Wearables"
        >
          <CascadingMenuItem>Mobile Phones</CascadingMenuItem>
          <CascadingSubMenu
            popupId="mobile-tablet-accessories"
            title="Mobile & Tablet Accessories"
          >
            <CascadingMenuItem>Cases, Covers & Skins</CascadingMenuItem>
            <CascadingMenuItem>Screen Protectors</CascadingMenuItem>
          </CascadingSubMenu>
        </CascadingSubMenu>

        <CascadingSubMenu popupId="computers" title="Computers">
          <CascadingMenuItem>Laptops</CascadingMenuItem>
          <CascadingSubMenu popupId="printers-inks" title="Printers & Inks">
            <CascadingMenuItem>Printers</CascadingMenuItem>
            <CascadingMenuItem>Inks & Toners</CascadingMenuItem>
          </CascadingSubMenu>
        </CascadingSubMenu> */}
      </CascadingMenu>
    </>
  );
};

export default AllCategories;
