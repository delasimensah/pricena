import React from "react";
import { Box, Grid } from "@mui/material";
import { Layout, Filters } from "@components";

const SubCategoryOne = () => {
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
            <Box className="bg-white">Grid 2</Box>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  );
};

export default SubCategoryOne;
