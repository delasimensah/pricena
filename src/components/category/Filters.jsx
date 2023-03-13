import { Box, List } from "@mui/material";

import RefineSearch from "./filters/RefineSearch";
import Category from "./filters/Category";

const Filters = () => {
  return (
    <Box className="px-5">
      <List>
        <RefineSearch />
        <Category />
      </List>
    </Box>
  );
};

export default Filters;
