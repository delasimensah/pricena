import React from "react";
import {
  Box,
  Grid,
  Breadcrumbs,
  Typography,
  Stack,
  Rating,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Layout, Filters } from "@components";
import Link from "next/link";
import { IoChevronForwardOutline } from "react-icons/io5";
import Image from "next/image";

import productImg from "@assets/8.png";
import qonooz from "@assets/qonooz.png";

const phonesArray = new Array(10).fill(0);

const SubCategoryOne = () => {
  const { palette } = useTheme();

  return (
    <Layout>
      <Box
        sx={{
          maxWidth: "1356px",
          marginX: "auto",
          marginTop: "20px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item lg={3}>
            <Box className="bg-white">
              <Filters />
            </Box>
          </Grid>

          <Grid item lg={9}>
            <Stack
              spacing={2}
              sx={{ backgroundColor: "white", padding: "20px" }}
            >
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography sx={{ fontSize: "18px", color: "#444" }}>
                  1500+ results from 13 stores
                </Typography>

                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  spacing={5}
                  sx={{
                    fontSize: "14px",
                  }}
                >
                  <Stack>
                    <Typography>View</Typography>
                  </Stack>

                  <Stack>
                    <Typography>Sort</Typography>
                  </Stack>
                </Stack>
              </Stack>

              <Breadcrumbs
                sx={{ fontSize: "13px", color: palette.primary.main }}
                separator={<IoChevronForwardOutline />}
              >
                <Link href="#">Mobile Tablets & Wearables</Link>
                <Link href="#">Mobile Phones</Link>
              </Breadcrumbs>

              <Typography sx={{ fontSize: "22px", fontWeight: 600 }}>
                Mobile Phones
              </Typography>

              <Typography sx={{ fontSize: "15px" }}>
                With over 75% smartphone penetration and a large consumer
                appetite for electronics, the UAE is one of the hottest markets
                for brands such as Samsung and Apple . Apple pioneered the
                smartphone with their first generation iPhone and has set the
                standard for a whole new industry. Samsungs Galaxy series, such
                as the Galaxy S3, S4 and the Galaxy S5 is upping the game with
                Apple, with HTC a strong contender for beautifully designed
                smartphones. When looking to buy a smartphone , it typically
                comes down to three main features: the screen size, the internal
                memory and the RAM memory. Screen sizes come in various formats
                and can be as small as an old Nokia or as big as the newer
                phablets -- a hybrid of a tablet and a phone. Go for higher RAM,
                this will enable you to open multiple applications at the same
                time without losing performance. Finally, if youre going for an
                LTE-enabled phone, be sure it works in the UAE with Etisalat and
                Du. Some phones operate on bands that are incompatible with the
                UAE.
              </Typography>

              <Grid
                container
                sx={{
                  borderTop: "1px solid #eee",
                  height: "150px",
                }}
              ></Grid>

              <Stack sx={{ borderTop: "1px solid #eee" }}>
                {phonesArray.map((_, idx) => {
                  return (
                    <Stack
                      key={idx}
                      direction="row"
                      alignItems="center"
                      spacing={5}
                      sx={{ borderBottom: "1px solid #eee", paddingY: "20px" }}
                    >
                      <Box
                        sx={{
                          height: "180px",
                          width: "20%",
                          position: "relative",
                          marginRight: "10px",
                        }}
                      >
                        <Image
                          src={productImg}
                          alt=""
                          fill
                          object-fit="contain"
                        />
                      </Box>

                      <Stack spacing="3px" sx={{ width: "35%" }}>
                        <Link href="/product/samsung-galaxy-z-flip-3">
                          <Typography
                            sx={{
                              fontSize: "15px",
                              fontWeight: 600,
                              "&:hover": {
                                color: "#999",
                              },
                            }}
                          >
                            Samsung Galaxy Z Flip3
                          </Typography>
                        </Link>

                        <Rating
                          name="read-only"
                          value={4}
                          readOnly
                          size="small"
                        />

                        <Link href="#">
                          <Typography
                            sx={{
                              fontSize: "19px",
                              fontWeight: 700,
                              color: palette.primary.main,
                            }}
                          >
                            AED 2500
                          </Typography>
                        </Link>

                        <Link href="#">
                          <Typography
                            sx={{
                              color: palette.primary.main,
                              fontSize: "14px",
                            }}
                          >
                            compare 6 online shops
                          </Typography>
                        </Link>

                        <Typography sx={{ fontSize: "13px", color: "#888" }}>
                          <Link href="#">
                            <Box
                              component="span"
                              sx={{ color: palette.primary.main }}
                            >
                              AED 379
                            </Box>
                          </Link>{" "}
                          from 28 nearby stores
                        </Typography>
                      </Stack>

                      <Stack spacing="10px" sx={{ width: "45%" }}>
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <Image src={qonooz} alt="" height={30} width={60} />

                          <Stack sx={{ marginRight: "30px" }}>
                            <Typography
                              sx={{ fontSize: "12px", color: "#888" }}
                            >
                              Qonooz
                            </Typography>

                            <Typography sx={{ fontSize: "14px" }}>
                              <Link href="#">
                                <Box
                                  component="span"
                                  sx={{
                                    color: palette.primary.main,
                                    fontWeight: 600,
                                  }}
                                >
                                  3499 AED
                                </Box>
                              </Link>
                              <Box
                                component="span"
                                sx={{ fontSize: "12px", color: "#888" }}
                              >
                                {" "}
                                Free Shipping
                              </Box>
                            </Typography>
                          </Stack>

                          <Button
                            sx={{
                              backgroundColor: palette.primary.main,
                              "&:hover": {
                                backgroundColor: palette.primary.main,
                              },
                              color: "white",
                              borderRadius: 0,
                            }}
                            size="large"
                            endIcon={<IoChevronForwardOutline size={15} />}
                          >
                            Go to Shop
                          </Button>
                        </Stack>

                        <Stack direction="row" alignItems="center" spacing={1}>
                          <Image src={qonooz} alt="" height={30} width={60} />

                          <Stack sx={{ marginRight: "30px" }}>
                            <Typography
                              sx={{ fontSize: "12px", color: "#888" }}
                            >
                              Qonooz
                            </Typography>

                            <Typography sx={{ fontSize: "14px" }}>
                              <Link href="#">
                                <Box
                                  component="span"
                                  sx={{
                                    color: palette.primary.main,
                                    fontWeight: 600,
                                  }}
                                >
                                  3499 AED
                                </Box>
                              </Link>
                              <Box
                                component="span"
                                sx={{ fontSize: "12px", color: "#888" }}
                              >
                                {" "}
                                Free Shipping
                              </Box>
                            </Typography>
                          </Stack>

                          <Button
                            sx={{
                              backgroundColor: palette.primary.main,
                              "&:hover": {
                                backgroundColor: palette.primary.main,
                              },
                              color: "white",
                              borderRadius: 0,
                            }}
                            size="large"
                            endIcon={<IoChevronForwardOutline size={15} />}
                          >
                            Go to Shop
                          </Button>
                        </Stack>

                        <Stack direction="row" alignItems="center" spacing={1}>
                          <Image src={qonooz} alt="" height={30} width={60} />

                          <Stack sx={{ marginRight: "30px" }}>
                            <Typography
                              sx={{ fontSize: "12px", color: "#888" }}
                            >
                              Qonooz
                            </Typography>

                            <Typography sx={{ fontSize: "14px" }}>
                              <Link href="#">
                                <Box
                                  component="span"
                                  sx={{
                                    color: palette.primary.main,
                                    fontWeight: 600,
                                  }}
                                >
                                  3499 AED
                                </Box>
                              </Link>
                              <Box
                                component="span"
                                sx={{ fontSize: "12px", color: "#888" }}
                              >
                                {" "}
                                Free Shipping
                              </Box>
                            </Typography>
                          </Stack>

                          <Button
                            sx={{
                              backgroundColor: palette.primary.main,
                              "&:hover": {
                                backgroundColor: palette.primary.main,
                              },
                              color: "white",
                              borderRadius: 0,
                            }}
                            size="large"
                            endIcon={<IoChevronForwardOutline size={15} />}
                          >
                            Go to Shop
                          </Button>
                        </Stack>
                      </Stack>
                    </Stack>
                  );
                })}
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default SubCategoryOne;
