import React from "react";
import { Box, Typography } from "@mui/material";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import productImg from "@assets/8.png";

const slidesArray = new Array(12).fill(0);

const FeaturedProducts = ({ title }) => {
  const { push } = useRouter();

  const settings = {
    infinite: false,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 3,
    arrows: true,
  };

  return (
    <Box className="pb-2 space-y-5">
      <Box className="flex items-center space-x-5">
        <Typography className="text-lg font-semibold capitalize">
          {title}
        </Typography>

        <div className="flex-1 border-t border-t-gray-200" />
      </Box>

      <Slider {...settings}>
        {slidesArray.map((_, idx) => {
          return (
            <Box key={idx} className="pr-5">
              <Box className="flex flex-col items-center p-5 border border-transparent hover:shadow-md hover:border-gray-100">
                <Box
                  className="relative w-[160px] h-[160px] cursor-pointer"
                  onClick={() => push("/product/samsung-galaxy-z-flip-3")}
                >
                  <Image src={productImg} alt="" fill object-fit="contain" />
                </Box>

                <Box>
                  <Link href="/product/samsung-galaxy-z-flip-3">
                    <Typography>Samsung Galaxy Z Flip3</Typography>
                  </Link>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Slider>
    </Box>
  );
};

export default FeaturedProducts;
