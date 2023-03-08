import { useState } from "react";
import {
  Box,
  Grid,
  Breadcrumbs,
  Typography,
  Divider,
  Rating,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  IoNotificationsOutline,
  IoHeartOutline,
  IoChevronForwardOutline,
  IoCheckmarkCircleSharp,
} from "react-icons/io5";
import Link from "next/link";

import Image from "next/image";

import img2 from "@assets/2.png";
import img3 from "@assets/3.png";
import img4 from "@assets/4.png";
import img5 from "@assets/5.png";
import img6 from "@assets/6.png";
import img7 from "@assets/7.png";
import img8 from "@assets/8.png";
import img9 from "@assets/9.png";

const imgs = [img2, img3, img4, img5, img6, img7, img8, img9];
const menuLinks = [
  "Compare Prices",
  "Videos",
  "Price Tracking",
  "Specs",
  "Ratings",
];

const ProductDetails = () => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState(0);
  const [active, setActive] = useState("Compare Prices");

  return (
    <Box
      sx={{
        backgroundColor: "white",
        maxWidth: "1356px",
        marginX: "auto",
        marginTop: "20px",
      }}
    >
      <Grid container>
        {/* col 1 */}
        <Grid item lg={3}>
          <Box sx={{ padding: "15px" }}>
            {/* breadcrumbs */}
            <Breadcrumbs sx={{ fontSize: "12px", color: "#aaa" }}>
              <Link href="#">Mobile Tablets & Wearables</Link>
              <Link href="#">Mobile Phones</Link>
              <Link href="#">SAMSUNG Mobile Phones</Link>
            </Breadcrumbs>

            {/* carousel*/}
            <Box
              sx={{
                marginTop: "10px",
                position: "relative",
                minHeight: "417px",
                width: "100%",
              }}
            >
              {/* selected image */}
              <Box
                sx={{
                  height: "300px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image src={imgs[selected]} alt="" width={250} height={250} />
              </Box>

              {/* images */}
              <Grid container sx={{ marginTop: "10px" }} spacing={1}>
                {imgs.map((img, idx) => {
                  return (
                    <Grid key={idx} item lg={3}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          border:
                            selected === idx
                              ? `1px solid ${palette.primary.main}`
                              : "1px solid #eeeeee",
                          cursor: "pointer",
                        }}
                        onMouseEnter={() => {
                          setSelected(idx);
                        }}
                      >
                        <Image src={img} alt="" width={50} height={50} />
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>

              {/* popular */}
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
            </Box>
          </Box>
        </Grid>

        {/* col 2 */}
        <Grid item lg={6}>
          {/* links */}
          <Box
            sx={{
              paddingX: "15px",
              paddingBottom: "15px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {menuLinks.map((link, idx) => {
                return (
                  <Box
                    key={idx}
                    sx={{
                      borderTop:
                        active === link
                          ? `3px solid ${palette.primary.main}`
                          : "3px solid transparent",
                      marginRight: "20px",
                      paddingY: "10px",
                      color: active === link ? "#888" : "#aaa",
                      fontWeight: active === link ? 700 : 400,

                      "&:hover": {
                        borderTop: `3px solid ${palette.primary.main}`,
                      },
                    }}
                  >
                    <Link href="#">
                      <Typography>{link}</Typography>
                    </Link>
                  </Box>
                );
              })}
            </Box>

            {/* product info */}

            <Box>
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
                  <Typography sx={{ color: "#aaa", fontSize: "12px" }}>
                    by
                  </Typography>
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

              <Box
                sx={{
                  marginY: "10px",
                  borderTop: "1px solid #ececec",
                  paddingY: "5px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box className="space-y-1">
                    <div className=" flex items-center space-x-1">
                      <IoCheckmarkCircleSharp color="#3498DB" />

                      <Typography className="text-[12px] text-[#aaa]">
                        <span className={`text-[#3498DB] font-medium `}>
                          Best Price
                        </span>{" "}
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

                    <div className="flex items-end space-x-5 text-[#888]">
                      <div className="flex place-items-center space-x-2">
                        <IoNotificationsOutline size="18px" />

                        <p className="text-[13px]">Set price alert</p>
                      </div>

                      <div className="flex place-items-center space-x-2">
                        <IoHeartOutline size="18px" />

                        <p className="text-[13px]">Add to Favourites</p>
                      </div>
                    </div>
                  </Box>

                  <Box className="py-5">
                    <Button
                      className="bg-[#3498DB] text-white hover:bg-[#3498DB] hover:text-white shadow-none rounded-none"
                      size="large"
                      endIcon={<IoChevronForwardOutline />}
                    >
                      Go To Amazon AE
                    </Button>
                  </Box>
                </Box>
              </Box>

              {/* <Box
                sx={{
                  borderTop: "1px solid #ececec",
                  paddingY: "10px",
                }}
              >
                Select
              </Box> */}
            </Box>
          </Box>
        </Grid>

        {/* col 3 */}
      </Grid>
    </Box>
  );
};

export default ProductDetails;
