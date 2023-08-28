import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow"; // Import effect style
import "swiper/css/navigation"; // Import navigation style
import "swiper/css/pagination"; // Import pagination style
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import SliderImage from "../JSON/SliderImgs.json";

// Install Swiper components
SwiperCore.use([EffectCoverflow, Navigation, Pagination]);

const Home = () => {
  const randomEffectOptions = {
    effect: "coverflow",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
  };

  return (
    <div
      style={{ marginTop: "30px", marginBottom: "30px", borderRadius: "10px" }}
    >
      <Swiper
        className="mySwiper swiper-div"
        style={{ height: 500 }}
        {...randomEffectOptions} // Apply random effect
        navigation // Add navigation buttons
        pagination={{ clickable: true }} // Add dot buttons
      >
        {SliderImage.map((image, index) => (
          <SwiperSlide key={index} style={{ width: "100%" }}>
            <img
              src={image.img}
              style={{
                borderRadius: "10px",
                objectFit: "cover",
                height: "100%",
                width: "100%",
              }}
              alt={`Slide ${index}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Home;
