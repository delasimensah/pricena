import { Box, MenuItem, FormControl, Select } from "@mui/material";

const Variants = () => {
  return (
    <Box
      sx={{
        borderTop: "1px solid #ececec",
        paddingY: "10px",
      }}
      className="flex items-center space-x-5"
    >
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select defaultValue="all" displayEmpty>
          <MenuItem value="all">All Colors</MenuItem>
          <MenuItem value={10}>Blue</MenuItem>
          <MenuItem value={20}>Pink</MenuItem>
          <MenuItem value={30}>Black</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select defaultValue="all" displayEmpty>
          <MenuItem value="all">All Capacities</MenuItem>
          <MenuItem value={10}>128 GB</MenuItem>
          <MenuItem value={20}>256 GB</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select defaultValue="5G" displayEmpty>
          <MenuItem value="5G">5G</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Variants;
