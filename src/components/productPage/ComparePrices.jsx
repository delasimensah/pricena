import React from "react";
import { Box, Tabs, Tab, Typography, Button, Chip, Stack } from "@mui/material";
import { IoChevronForwardOutline } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";

import qonooz from "@assets/qonooz.png";

const data = new Array(10).fill(0);

const TabPanel = ({ children, value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
};

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
          return <ShopLink key={idx} />;
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

function ShopLink() {
  return (
    <div className="flex py-3 border-b border-b-[#ececec]">
      <div className="flex-1 space-y-1">
        <Link href="#" className="text-sm hover:text-[#888]">
          Samsung Galaxy Z Flip3 5G Single SIM and e-SIM Smartphone, 128GB
          Storage and 8GB RAM, Green | <span>Price updated 3 days ago</span>{" "}
          <Stack direction="row" spacing={1}>
            <Chip
              label="128 GB"
              variant="outlined"
              color="primary"
              className="rounded-none"
            />
            <Chip
              label="Black"
              variant="outlined"
              color="primary"
              className="rounded-none"
            />
          </Stack>
        </Link>

        <Link href="#">
          <Typography className="text-sm text-[#3498DB] py-2">
            +6 options
          </Typography>
        </Link>

        <Box className="flex items-center">
          <Image src={qonooz} alt="" width={100} height={50} />

          <div className="px-3">
            <Link href="#" className="text-xs font-bold text-[#888]">
              Qonooz
            </Link>
            <Typography className="text-xs text-[#888]">
              Delivery in 1 Day
            </Typography>
            <Link href="#" className="text-xs text-[#888]">
              More info
            </Link>
          </div>
        </Box>

        <Link href="#" className="text-xs text-[#888]">
          Write a review
        </Link>
      </div>

      <div className="flex flex-col items-end space-y-2">
        <Typography className="text-[#3498DB]">
          <span className="text-sm">AED</span>
          <span className="pl-1 text-2xl font-bold">3499</span>
        </Typography>

        <Typography className="text-xs text-[#888]">Free Shipping</Typography>

        <Button
          className="bg-[#3498DB] hover:bg-[#3498DB] text-white rounded-none"
          size="large"
          endIcon={<IoChevronForwardOutline />}
        >
          Go to Shop
        </Button>
      </div>
    </div>
  );
}

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
