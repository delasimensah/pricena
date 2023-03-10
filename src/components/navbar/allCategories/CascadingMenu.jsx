import { useContext, useMemo } from "react";
import { Context } from ".";
import HoverMenu from "material-ui-popup-state/HoverMenu";
import { bindMenu } from "material-ui-popup-state/hooks";

const CascadingMenu = ({ popupState, ...props }) => {
  const { rootPopupState } = useContext(Context);

  const value = useMemo(
    () => ({
      rootPopupState: rootPopupState || popupState,
      parentPopupState: popupState,
    }),
    [rootPopupState, popupState]
  );

  return (
    <Context.Provider value={value}>
      <HoverMenu
        {...props}
        {...bindMenu(popupState)}
        classes={{
          paper: "w-80 rounded-none py-0",
        }}
      />
    </Context.Provider>
  );
};

export default CascadingMenu;
