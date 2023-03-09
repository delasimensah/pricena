import { useState } from "react";
import { Box, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Image from "next/image";

import img2 from "@assets/2.png";
import img3 from "@assets/3.png";
import img4 from "@assets/4.png";
import img5 from "@assets/5.png";
import img6 from "@assets/6.png";
import img7 from "@assets/7.png";
import img8 from "@assets/8.png";
import img9 from "@assets/9.png";

const imgs = [
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  "https://r.kelkoo.com/resize.php?country=ae&merchantId=100540299&categoryId=113501&trackingId=96986255&width=300&height=300&image=https%3A%2F%2Fwww.eros.ae%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Fd620ef8fe727ad37280b526706b83920%2Fs%2Fm%2Fsmt220nzaameaw-02_1.jpg&sign=CIHDurV1E9UljK88xMtlLwVX0oMohVzSpbCU47BCXPY-",
];

const Carousel = () => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState(0);

  return (
    <Box
      sx={{
        marginTop: "10px",
        position: "relative",
        minHeight: "417px",
        width: "100%",
      }}
    >
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
    </Box>
  );
};

export default Carousel;
