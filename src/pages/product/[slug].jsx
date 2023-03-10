import { Box, Grid, Breadcrumbs } from "@mui/material";
import Link from "next/link";
import {
  Layout,
  Carousel,
  Popular,
  Links,
  ProductName,
  BestPrice,
  Variants,
  ComparePrices,
} from "@components";

const ProductDetails = () => {
  return (
    <Layout>
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
          <Grid item xs={12} lg={3}>
            <Box sx={{ padding: "15px" }}>
              {/* breadcrumbs */}
              <Breadcrumbs sx={{ fontSize: "12px", color: "#aaa" }}>
                <Link href="#">Mobile Tablets & Wearables</Link>
                <Link href="#">Mobile Phones</Link>
                <Link href="#">SAMSUNG Mobile Phones</Link>
              </Breadcrumbs>

              <Carousel />

              <Popular />
            </Box>
          </Grid>

          {/* col 2 */}
          <Grid item xs={12} lg={6}>
            <Box
              sx={{
                paddingX: "15px",
                paddingBottom: "15px",
              }}
            >
              <Links />

              <ProductName />

              <BestPrice />

              <Variants />

              <ComparePrices />
            </Box>
          </Grid>

          {/* col 3 */}
          {/* <Grid item xs={12} lg={3}>
            <Box>Col 3</Box>
          </Grid> */}
        </Grid>
      </Box>
    </Layout>
  );
};

export default ProductDetails;
