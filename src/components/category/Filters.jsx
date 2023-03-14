import { Box, List } from "@mui/material";

import RefineSearch from "./filters/RefineSearch";
import Category from "./filters/Category";
import Brand from "./filters/Brand";
import Price from "./filters/Price";
import Band from "./filters/Band";
import Capacity from "./filters/Capacity";
import Color from "./filters/Color";
import CoreProcessor from "./filters/CoreProcessor";
import DeviceRAM from "./filters/DeviceRAM";
import DisplaySize from "./filters/DisplaySize";
import OS from "./filters/OS";
import SimCardSlots from "./filters/SimCardSlots";
import SpecialFeatures from "./filters/SpecialFeatures";
import OnlineShop from "./filters/OnlineShop";

const Filters = () => {
  return (
    <Box className="px-5">
      <List>
        <RefineSearch />
        <Category />
        <Brand />
        <Price />
        <Band />
        <Capacity />
        <Color />
        <CoreProcessor />
        <DeviceRAM />
        <DisplaySize />
        <OS />
        <SimCardSlots />
        <SpecialFeatures />
        <OnlineShop />
      </List>
    </Box>
  );
};

export default Filters;
