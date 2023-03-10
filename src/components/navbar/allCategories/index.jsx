import { useContext, createContext, useMemo, useCallback } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import { Typography, Box, MenuItem } from "@mui/material";
import HoverMenu from "material-ui-popup-state/HoverMenu";
import {
  usePopupState,
  bindHover,
  bindMenu,
} from "material-ui-popup-state/hooks";
import colors from "@lib/colors";

const CascadingContext = createContext({
  parentPopupState: null,
  rootPopupState: null,
});

function CascadingMenuItem({ onClick, ...props }) {
  const { rootPopupState } = useContext(CascadingContext);

  if (!rootPopupState) throw new Error("must be used inside a CascadingMenu");

  const handleClick = useCallback(
    (event) => {
      rootPopupState.close(event);
      if (onClick) onClick(event);
    },
    [rootPopupState, onClick]
  );

  return <MenuItem {...props} onClick={handleClick} />;
}

function CascadingSubmenu({ title, popupId, ...props }) {
  const { parentPopupState } = useContext(CascadingContext);

  const popupState = usePopupState({
    popupId,
    variant: "popover",
    parentPopupState,
  });

  return (
    <>
      <MenuItem {...bindHover(popupState)}>
        <span className="flex-1">{title}</span>
      </MenuItem>

      <CascadingMenu
        {...props}
        classes={{ ...props.classes, paper: "mt-5" }}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        popupState={popupState}
      />
    </>
  );
}

function CascadingMenu({ popupState, ...props }) {
  const { rootPopupState } = useContext(CascadingContext);

  const context = useMemo(
    () => ({
      rootPopupState: rootPopupState || popupState,
      parentPopupState: popupState,
    }),
    [rootPopupState, popupState]
  );

  return (
    <CascadingContext.Provider value={context}>
      <HoverMenu {...props} {...bindMenu(popupState)} />
    </CascadingContext.Provider>
  );
}

const categories = [
  "Mobile, Tablet & Wearables",
  "Computers",
  "Cameras",
  "TV & Video",
  "Video Games & Consoles",
  "Audio",
  "Office Supplies",
  "Home Appliances",
  "Personal Care & Beauty",
  "Car Parts & Accessories",
  "Men Fashion",
  "Women Fashion",
  "Books",
  "Sports Equipment",
];

const AllCategories = () => {
  const popupState = usePopupState({
    popupId: "allCategories",
    variant: "popover",
  });

  const subPopupState = usePopupState({
    popupId: "subMenu",
    variant: "popover",
  });

  return (
    <>
      <Box
        className="flex items-center h-full py-4 space-x-2 cursor-pointer"
        {...bindHover(popupState)}
      >
        <Typography
          className={`uppercase text-sm text-[${colors.main}] font-semibold`}
        >
          All Categories
        </Typography>

        <IoChevronDownOutline color={colors.main} />
      </Box>

      <HoverMenu
        {...bindMenu(popupState)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        classes={{
          paper: "w-80 rounded-none",
        }}
      >
        {categories.map((cat, idx) => {
          return (
            <MenuItem
              key={idx}
              classes={{
                root: `hover:bg-transparent hover:text-[${colors.main}]`,
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

export default AllCategories;

{
  /* <CascadingMenu
        popupState={popupState}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <CascadingMenuItem>Tea</CascadingMenuItem>
        <CascadingMenuItem>Cake</CascadingMenuItem>
        <CascadingMenuItem>Death</CascadingMenuItem>

        <CascadingSubmenu
          popupId="moreChoicesCascadingMenu"
          title="More Choices"
        >
          <CascadingMenuItem>Cheesecake</CascadingMenuItem>
          <CascadingMenuItem>Cheesedeath</CascadingMenuItem>
          <CascadingSubmenu
            popupId="evenMoreChoicesCascadingMenu"
            title="Even More Choices"
          >
            <CascadingMenuItem>Cake (the band)</CascadingMenuItem>
            <CascadingMenuItem>Death Metal</CascadingMenuItem>
          </CascadingSubmenu>
          <CascadingSubmenu
            popupId="moreBenignChoices"
            title="More Benign Choices"
          >
            <CascadingMenuItem>Salad</CascadingMenuItem>
            <CascadingMenuItem>Lobotomy</CascadingMenuItem>
          </CascadingSubmenu>
        </CascadingSubmenu>
      </CascadingMenu> */
}
