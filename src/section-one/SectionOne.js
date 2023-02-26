import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Countdown from "react-countdown";
import "./SectionOne.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
export default class SectionOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      productOnSales: [],
    };
    this.offerCountDownHandler = this.offerCountDownHandler.bind(this);
  }

  offerCountDownHandler({ days, hours, minutes, seconds, completed }) {
    if (completed) {
      // Render a completed state
    } else {
      return (
        <>
          <span>{days < 10 ? `0${days}` : days}</span>:
          <span>{hours < 10 ? `0${hours}` : hours}</span>:
          <span>{minutes < 10 ? `0${minutes}` : minutes}</span>:
          <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
        </>
      );
    }
  }
  async componentDidMount() {
    try {
      const callAPI = await fetch("https://fakestoreapi.com/products");
      const getAllProducts = await callAPI.json();
      this.setState({
        products: [...getAllProducts.slice(4)],
        productOnSales: [...getAllProducts.slice(0, 4)],
      });
    } catch (error) {
      alert("Server not respond☹️");
    }
  }

  render() {
    return (
      <section className="container-fluid container-lg mt-3">
        <div>
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
                  <img
                    src="./imgs/section-one/slider1.jpg"
                    alt="Swiper Slider"
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide className="section-one-swiper-items">
                <a href="https://reactjs.org/">
                  <img
                    src="./imgs/section-one/slide2.jpg"
                    alt="Swiper Slider"
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide className="section-one-swiper-items">
                <a href="https://reactjs.org/">
                  <img
                    src="./imgs/section-one/slide3.jpg"
                    alt="Swiper Slider"
                  />
                </a>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="section-one-banner-parent my-4 d-flex flex-wrap align-items-center justify-content-center w-100 mx-auto gap-3">
            <a href="https://reactjs.org/">
              <img
                src="./imgs/banner/banner-1.png"
                alt="Section one banner"
                className="w-100 mx-auto"
              />
            </a>
            <a href="https://reactjs.org/">
              <img
                src="./imgs/banner/banner-2.png"
                alt="Section one banner"
                className="w-100 mx-auto"
              />
            </a>
          </div>
        </div>
        <div className="section-one-offer-parent rounded-4 position-relative">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 3500,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="section-one-swiper"
          >
            {this.state.productOnSales.map((item) => {
              return (
                <SwiperSlide className="section-one-offer-items-parent w-100 bg-white rounded-3">
                  <span className="bg-danger text-white position-absolute top-0 left-0 m-3 px-2 fs-6 rounded-3">
                    Sale
                  </span>
                  <div className="text-center my-4">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="section-one-offer-timer-parent text-white mx-3 rounded-2">
                    <div className="section-one-offer-counter-parent fw-semibold d-flex justify-content-between py-2 px-5">
                      <Countdown
                        date={"2025-02-01"}
                        renderer={this.offerCountDownHandler}
                      />
                    </div>
                    <div className="section-one-offer-text-parent d-flex justify-content-between py-2 px-5">
                      <span>Days</span>
                      <span>Hrs</span>
                      <span>Mins</span>
                      <span>Secs</span>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    );
  }
}
