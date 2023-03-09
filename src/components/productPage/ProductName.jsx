import React from "react";
import Link from "next/link";

import { Box, Typography, Rating } from "@mui/material";

const ProductName = () => {
  return (
    <div>
      <Typography
        sx={{
          color: "#444",
          fontWeight: 700,
          fontSize: "24px",
        }}
      >
        Samsung Galaxy Z Flip 3
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography sx={{ color: "#aaa", fontSize: "12px" }}>by</Typography>
          <Link href="#">
            <Typography
              sx={{
                color: "#0077ab",
                marginLeft: "5px",
                fontSize: "12px",
              }}
            >
              SAMSUNG
            </Typography>
          </Link>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: "10px",
          }}
        >
          <Rating value={null} size="small" />
          <Typography sx={{ fontSize: "12px", marginLeft: "5px" }}>
            (18)
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default ProductName;
