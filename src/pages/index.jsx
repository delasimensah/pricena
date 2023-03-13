import { Box } from "@mui/material";
import { Layout, FeaturedProducts } from "@components";

const Home = () => {
  return (
    <Layout>
      <Box
        sx={{
          backgroundColor: "white",
          maxWidth: "1356px",
          marginX: "auto",
          marginY: "20px",
          paddingY: "10px",
          paddingX: "40px",
        }}
        className="space-y-10"
      >
        <FeaturedProducts title="featured products" />
        <FeaturedProducts title="featured" />
      </Box>
    </Layout>
  );
};

export default Home;
