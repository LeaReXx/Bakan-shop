import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./SectionOne.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
export default class SectionOne extends Component {
  render() {
    return (
      <section className="container container-fluid mt-3">
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2500,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="section-one-swiper rounded-4"
          >
            <SwiperSlide className="section-one-swiper-items">
              <a href="https://reactjs.org/">
                <img src="./imgs/section-one/slider1.jpg" alt="Swiper Slider" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="section-one-swiper-items">
              <a href="https://reactjs.org/">
                <img src="./imgs/section-one/slide2.jpg" alt="Swiper Slider" />
              </a>
            </SwiperSlide>
            <SwiperSlide className="section-one-swiper-items">
              <a href="https://reactjs.org/">
                <img src="./imgs/section-one/slide3.jpg" alt="Swiper Slider" />
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="section-one-banner-parent my-4 d-flex flex-wrap align-items-center justify-content-between w-100 mx-auto gap-3">
          <a href="">
            <img
              src="./imgs/banner/banner-1.png"
              alt="Section one banner"
              className="w-100 mx-auto"
            />
          </a>
          <a href="">
            <img
              src="./imgs/banner/banner-2.png"
              alt="Section one banner"
              className="w-100 mx-auto"
            />
          </a>
        </div>
      </section>
    );
  }
}
