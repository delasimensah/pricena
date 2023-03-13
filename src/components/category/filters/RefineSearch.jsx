import { Box } from "@mui/material";
import { IoSearchOutline } from "react-icons/io5";
import FilterItem from "./FilterItem";

const RefineSearch = () => {
  return (
    <FilterItem title="Refine Search">
      <Box className="flex items-center pr-3 border">
        <input
          className="flex-1 p-1 border-none focus:outline-none placeholder:text-sm"
          placeholder="search within results"
        />

        <IoSearchOutline size={17} />
      </Box>
    </FilterItem>
  );
};

export default RefineSearch;
