import { Box, Typography } from "@mui/material";
import Link from "next/link";

const Popular = () => {
  return (
    <Box sx={{ marginTop: "30px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ fontSize: "17px", fontWeight: 600 }}>
          Popular in Mobile Phones
        </Typography>

        <Link href="#">
          <Typography sx={{ color: "#aaa" }}>See all</Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default Popular;
