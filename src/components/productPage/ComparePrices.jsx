import React from "react";
import { Box, Tabs, Tab, Typography } from "@mui/material";

const data = new Array(5).fill(0);

function TabPanel({ children, value, index }) {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const CustomTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", marginTop: "5px" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="Online Shops (5)" className="capitalize" />
          <Tab label="Nearby Shops (54)" className="capitalize" />
          <Tab label="Used & Refurbished (0)" className="capitalize" disabled />
        </Tabs>
      </Box>

      <TabPanel value={value} index={0}>
        {data.map((_, idx) => {
          return <Box key={idx}>Info</Box>;
        })}
      </TabPanel>

      <TabPanel value={value} index={1}>
        Nearby Shops (54)
      </TabPanel>

      <TabPanel value={value} index={2}>
        Used & Refirbished
      </TabPanel>
    </Box>
  );
};

const ComparePrices = () => {
  return (
    <Box
      sx={{
        borderTop: "1px solid #ececec",
        paddingY: "10px",
      }}
    >
      <Typography className="text-lg font-bold">
        Samsung Galaxy Z Flip 3 Price Dubai, UAE
      </Typography>

      <CustomTabs />
    </Box>
  );
};

export default ComparePrices;
