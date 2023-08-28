import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Box } from "@mui/material";
const Advertisement = () => {
  return (
    <Box mb={3}>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="swiper-slide">
          <img
            src="https://img.freepik.com/premium-photo/flying-yellow-leather-womens-sneaker-isolated-white-background-fashionable-stylish-sports-casual-shoes-creative-minimalistic-layout-with-footwear-mock-up-design-advertising-shoe-store_505557-5366.jpg?w=2000"
            width={"100%"}
            height={"600px"}
            style={{ objectFit: "cover" }}
            alt="Slide 1"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src="https://images.unsplash.com/photo-1610664676282-55c8de64f746?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60"
            width={"100%"}
            height={"600px"}
            style={{ objectFit: "cover" }}
            alt="Slide 2"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
            width={"100%"}
            height={"600px"}
            style={{ objectFit: "cover" }}
            alt="Slide 2"
          />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};

export default Advertisement;
