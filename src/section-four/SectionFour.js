import React, { PureComponent } from "react";
import "./SectionFour.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
export default class SectionFour extends PureComponent {
  constructor(props) {
    super(props);
    this.brands = [
      {
        id: 1,
        img: "./imgs/brand-section/b1.jpg",
        url: "https://reactjs.org/",
      },
      {
        id: 2,
        img: "./imgs/brand-section/b2.jpg",
        url: "https://reactjs.org/",
      },
      {
        id: 3,
        img: "./imgs/brand-section/b3.jpg",
        url: "https://reactjs.org/",
      },
      {
        id: 4,
        img: "./imgs/brand-section/b4.jpg",
        url: "https://reactjs.org/",
      },
      {
        id: 5,
        img: "./imgs/brand-section/b5.jpg",
        url: "https://reactjs.org/",
      },
      {
        id: 6,
        img: "./imgs/brand-section/b6.jpg",
        url: "https://reactjs.org/",
      },
      {
        id: 7,
        img: "./imgs/brand-section/b7.jpg",
        url: "https://reactjs.org/",
      },
    ];
  }
  render() {
    return (
      <section className="container-fluid container-lg py-5">
        <div className="text-center mb-4">
          <h2>Shop By Brands</h2>
        </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            400: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            600: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            800: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1000: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            1400: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
          navigation={true}
          speed={600}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Autoplay]}
          className="section-brand-swiper mySwiper"
        >
          {this.brands.map((brand) => (
            <SwiperSlide key={brand.id}>
              <div className="rounded-5 overflow-hidden text-center">
                <img src={brand.img} alt="" className="rounded-5" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    );
  }
}
