import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SharedImage from "components/_shared/sharedImage";
import { Box } from "@mui/material";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";

const imgStyle = {
  width: 200,
  height: 200,
};

const swiperStyle = {
  height: "50%",
  width: "100%",
};

const sliderContainerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

interface IDemoSwiperProps {
  imgUrls: string[];
}

const DemoSwiper: FC<IDemoSwiperProps> = ({ imgUrls }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop
      navigation
      autoplay
      pagination
      modules={[Navigation]}
      style={swiperStyle}
    >
      {imgUrls &&
        imgUrls.map((imgUrl) => (
          <SwiperSlide>
            <Box sx={sliderContainerStyle}>
              <SharedImage src={imgUrl} style={imgStyle} />
            </Box>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default DemoSwiper;
