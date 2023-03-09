import React from "react";
import { Box, Typography, Button } from "@mui/material";
import {
  IoNotificationsOutline,
  IoHeartOutline,
  IoChevronForwardOutline,
  IoCheckmarkCircleSharp,
} from "react-icons/io5";

const BestPrice = () => {
  return (
    <Box
      sx={{
        marginY: "10px",
        borderTop: "1px solid #ececec",
        paddingY: "10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box className="space-y-1">
          <div className="flex items-center space-x-1 ">
            <IoCheckmarkCircleSharp color="#3498DB" />

            <Typography className="text-[12px] text-[#aaa]">
              <span className={`text-[#3498DB] font-medium `}>Best Price</span>{" "}
              from 5 online stores
            </Typography>
          </div>

          <Typography className=" text-[#aaa]">
            <span className={`text-[#0077ab] text-[32px] font-bold`}>
              AED 2126
            </span>{" "}
            from{" "}
            <span className="text-[14px] text-[#888] font-medium">
              Amazon AE
            </span>
          </Typography>

          <Typography className="text-xs text-[#888]">
            AED 2136 including 10 AED shipping
          </Typography>

          <div className="flex items-end space-x-5 pt-2 text-[#888]">
            <div className="flex space-x-2 place-items-center">
              <IoNotificationsOutline size="18px" />

              <p className="text-[13px]">Set price alert</p>
            </div>

            <div className="flex space-x-2 place-items-center">
              <IoHeartOutline size="18px" />

              <p className="text-[13px]">Add to Favourites</p>
            </div>
          </div>
        </Box>

        <Box className="py-5">
          <Button
            className="bg-[#3498DB] text-white hover:bg-[#3498DB] hover:text-white shadow-none rounded-none hover:shadow-none"
            size="large"
            endIcon={<IoChevronForwardOutline />}
            variant="contained"
          >
            Go To Amazon AE
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default BestPrice;
