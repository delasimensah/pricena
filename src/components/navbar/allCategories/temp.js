// const CascadingContext = createContext({
//   parentPopupState: null,
//   rootPopupState: null,
// });

// function CascadingMenuItem({ onClick, ...props }) {
//   const { rootPopupState } = useContext(CascadingContext);

//   if (!rootPopupState) throw new Error("must be used inside a CascadingMenu");

//   const handleClick = useCallback(
//     (event) => {
//       rootPopupState.close(event);
//       if (onClick) onClick(event);
//     },
//     [rootPopupState, onClick]
//   );

//   return <MenuItem {...props} onClick={handleClick} />;
// }

// function CascadingSubmenu({ title, popupId, ...props }) {
//   const { parentPopupState } = useContext(CascadingContext);

//   const popupState = usePopupState({
//     popupId,
//     variant: "popover",
//     parentPopupState,
//   });

//   return (
//     <>
//       <MenuItem {...bindHover(popupState)}>
//         <span className="flex-1">{title}</span>
//       </MenuItem>

//       <CascadingMenu
//         {...props}
//         classes={{ ...props.classes, paper: "mt-5" }}
//         anchorOrigin={{ vertical: "top", horizontal: "right" }}
//         transformOrigin={{ vertical: "top", horizontal: "left" }}
//         popupState={popupState}
//       />
//     </>
//   );
// }

// function CascadingMenu({ popupState, ...props }) {
//   const { rootPopupState } = useContext(CascadingContext);

//   const context = useMemo(
//     () => ({
//       rootPopupState: rootPopupState || popupState,
//       parentPopupState: popupState,
//     }),
//     [rootPopupState, popupState]
//   );

//   return (
//     <CascadingContext.Provider value={context}>
//       <HoverMenu {...props} {...bindMenu(popupState)} />
//     </CascadingContext.Provider>
//   );
// }

// const CascadingHoverMenus = () => {
//   const popupState = usePopupState({
//     popupId: 'demoMenu',
//     variant: 'popover',
//   })
//   return (
//     <div style={{ height: 600 }}>
//       <Button
//         variant="contained"
//         {...bindHover(popupState)}
//         {...bindFocus(popupState)}
//       >
//         Hover to open Menu
//       </Button>
//       <CascadingMenu
//         popupState={popupState}
//         anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
//         transformOrigin={{ vertical: 'top', horizontal: 'left' }}
//       >
//   <CascadingMenuItem>Tea</CascadingMenuItem>
//   <CascadingMenuItem>Cake</CascadingMenuItem>
//   <CascadingMenuItem>Death</CascadingMenuItem>
//   <CascadingSubmenu
//     popupId="moreChoicesCascadingMenu"
//     title="More Choices"
//   >
//     <CascadingMenuItem>Cheesecake</CascadingMenuItem>
//     <CascadingMenuItem>Cheesedeath</CascadingMenuItem>
//     <CascadingSubmenu
//       popupId="evenMoreChoicesCascadingMenu"
//       title="Even More Choices"
//     >
//       <CascadingMenuItem>Cake (the band)</CascadingMenuItem>
//       <CascadingMenuItem>Death Metal</CascadingMenuItem>
//     </CascadingSubmenu>
//     <CascadingSubmenu
//       popupId="moreBenignChoices"
//       title="More Benign Choices"
//     >
//       <CascadingMenuItem>Salad</CascadingMenuItem>
//       <CascadingMenuItem>Lobotomy</CascadingMenuItem>
//     </CascadingSubmenu>
//   </CascadingSubmenu>
// </CascadingMenu>
//     </div>
//   )
// }
