import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Countdown from "react-countdown";
import ReactStars from "react-stars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      productOnSales: [
        {
          id: 1,
          title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
          price: 30.95,
          description:
            "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
          category: "men's clothing",
          image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          priceInOffer: 10.99,
          offerEndDate: "2025-02-01T01:02:03",
          rating: {
            rate: 3.9,
            count: 120,
          },
        },
        {
          id: 2,
          title: "Mens Casual Premium Slim Fit T-Shirts ",
          price: 22.99,
          description:
            "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
          category: "men's clothing",
          image:
            "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
          priceInOffer: 20.99,
          offerEndDate: "2024-08-01T01:02:03",
          rating: {
            rate: 4.1,
            count: 259,
          },
        },
        {
          id: 3,
          title: "Mens Cotton Jacket",
          price: 55.99,
          description:
            "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
          category: "men's clothing",
          image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
          priceInOffer: 51.99,
          offerEndDate: "2023-12-26T01:02:03",
          rating: {
            rate: 4.7,
            count: 500,
          },
        },
        {
          id: 4,
          title: "Mens Casual Slim Fit",
          price: 15.99,
          description:
            "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
          category: "men's clothing",
          image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
          priceInOffer: 14.99,
          offerEndDate: Date.now() + 5000,
          rating: {
            rate: 2.1,
            count: 430,
          },
        },
      ],
    };
    this.offerCountDownHandler = this.offerCountDownHandler.bind(this);
  }

  offerCountDownHandler({ days, hours, minutes, seconds, completed }) {
    if (completed) {
      return (
        <>
          <div className="highIndex position-absolute top-0 start-0 d-flex justify-content-center align-items-center w-100 h-100 bg-dark bg-opacity-50 rounded-3">
            <h2 className="fw-semi-bold">Offer has ended☹️</h2>
          </div>
          <span>{days < 10 ? `0${days}` : days}</span>:
          <span>{hours < 10 ? `0${hours}` : hours}</span>:
          <span>{minutes < 10 ? `0${minutes}` : minutes}</span>:
          <span>{seconds < 10 ? `0${seconds}` : seconds}</span>
        </>
      );
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

  render() {
    return (
      <section className="container-fluid container-lg mt-5">
        <div className="d-md-flex justify-content-between">
          <div className="section-one-banners-parent">
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
            <div className="section-one-banner-parent my-4 d-flex flex-column flex-md-row justify-content-center justify-content-lg-around w-100 gap-3 text-center">
              <a href="https://reactjs.org/">
                <img
                  src="./imgs/banner/banner-1.png"
                  alt="Section one banner"
                  className="w-100"
                />
              </a>
              <a href="https://reactjs.org/">
                <img
                  src="./imgs/banner/banner-2.png"
                  alt="Section one banner"
                  className="w-100"
                />
              </a>
            </div>
          </div>
          <div className="section-one-offer-parent rounded-4 position-relative d-md-flex align-items-center justify-content-center">
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
                  <SwiperSlide
                    key={item.id}
                    className="section-one-offer-items-parent w-100 bg-white rounded-3 position-relative"
                  >
                    <span className="bg-danger text-white position-absolute top-0 left-0 m-3 px-2 fs-6 rounded-3">
                      Sale
                    </span>
                    <div className="text-center my-4">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="section-one-offer-timer-parent text-white mx-3 rounded-2 overflow-hidden">
                      <div className="section-one-offer-counter-parent fw-semibold d-flex justify-content-between py-2 py-md-1 px-5 px-md-2 px-xl-5">
                        <Countdown
                          date={item.offerEndDate}
                          renderer={this.offerCountDownHandler}
                        />
                      </div>
                      <div className="section-one-offer-text-parent d-flex justify-content-between py-2 py-md-1 px-5 px-md-2 px-xl-5">
                        <span>Days</span>
                        <span>Hrs</span>
                        <span>Mins</span>
                        <span>Secs</span>
                      </div>
                    </div>
                    <div className="text-center mx-auto my-3 my-md-1 px-2">
                      <a href="https://reactjs.org/" className="nav-link">
                        <strong className="fw-normal fs-6">{item.title}</strong>
                      </a>
                      <div className="d-flex justify-content-center">
                        <ReactStars
                          count={5}
                          size={22}
                          color2={"#ffd700"}
                          edit={false}
                          value={item.rating.rate}
                        />
                      </div>
                      <div className="my-2">
                        <h3 className="text-danger">
                          ${item.priceInOffer}
                          <sub className="text-decoration-line-through text-muted fw-normal px-1">
                            ${item.price}
                          </sub>
                        </h3>
                      </div>
                      <div className="product-btns-parent d-flex gap-1">
                        <button className="btn rounded-1">
                          <FontAwesomeIcon icon="fa-regular fa-heart" />
                        </button>
                        <button
                          className="btn rounded-1 w-100"
                          onClick={() =>
                            this.props.onCheckProductBeforeAdd({
                              ...item,
                              count: 1,
                            })
                          }
                        >
                          ADD TO CART
                        </button>
                        <button className="btn rounded-1">
                          <FontAwesomeIcon icon="fa-solid fa-arrows-rotate" />
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </section>
    );
  }
}
