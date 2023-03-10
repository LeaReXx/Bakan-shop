import React, { Component } from "react";
import "./SectionThree.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import ReactStars from "react-stars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default class SectionThree extends Component {
  constructor(props) {
    super(props);
    this.products = [
      {
        id: 15,
        title: "BIYLACLESEN Women's ",
        price: 56.99,
        description:
          "Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design: Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and water,for a comfortable fit. 3 in 1 Detachable Design provide more convenience, you can separate the coat and inner as needed, or wear it together. It is suitable for different season and help you adapt to different climates",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        rating: {
          rate: 2.6,
          count: 235,
        },
      },
      {
        id: 16,
        title: "Lock and Love Women's Removable Hooded",
        price: 29.95,
        description:
          "100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
        rating: {
          rate: 2.9,
          count: 340,
        },
      },
      {
        id: 17,
        title: "Rain Jacket Women Windbreaker",
        price: 39.99,
        description:
          "Lightweight perfet for trip or casual wear---Long sleeve with hooded, adjustable drawstring waist design. Button and zipper front closure raincoat, fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things, it covers the hips, and the hood is generous but doesn't overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        rating: {
          rate: 3.8,
          count: 679,
        },
      },
      {
        id: 18,
        title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
        price: 9.85,
        description:
          "95% RAYON 5% SPANDEX, Made in USA or Imported, Do Not Bleach, Lightweight fabric with great stretch for comfort, Ribbed on sleeves and neckline / Double stitching on bottom hem",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
        rating: {
          rate: 4.7,
          count: 130,
        },
      },
      {
        id: 19,
        title: "Opna Women's Short Sleeve Moisture",
        price: 7.95,
        description:
          "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk for a Great Fit, Lightweight, roomy and highly breathable with moisture wicking fabric which helps to keep moisture away, Soft Lightweight Fabric with comfortable V-neck collar and a slimmer fit, delivers a sleek, more feminine silhouette and Added Comfort",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
        rating: {
          rate: 4.5,
          count: 146,
        },
      },
      {
        id: 20,
        title: "DANVOUY Womens T Shirt",
        price: 12.99,
        description:
          "95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch., Occasion: Casual/Office/Beach/School/Home/Street. Season: Spring,Summer,Autumn,Winter.",
        category: "women's clothing",
        image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        rating: {
          rate: 3.6,
          count: 145,
        },
      },
    ];
  }
  render() {
    return (
      <section className="section-three mt-5 py-4">
        <div className="container-fluid container-lg">
          <div className="text-center py-4">
            <h2 className="text-white">Best Selling Products</h2>
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              576: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              800: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 20,
                speed:1500,
              },
            }}
            navigation={true}
            modules={[Navigation]}
            className="section-three-swiper rounded-4 pb-5"
          >
            {this.products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="best-selling-product-item bg-white p-2 ">
                  <div className="text-center py-4 nav-link">
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div className="text-center w-100 m-auto my-2">
                    <div className=" m-auto">
                      <strong className="nav-link">{product.title}</strong>
                    </div>
                    <div className="d-flex justify-content-center my-1">
                      <ReactStars
                        count={5}
                        size={20}
                        color2={"#ffd700"}
                        edit={false}
                        value={product.rating.rate}
                      />
                    </div>
                    <div className="pb-3">
                      <p className="fs-5 fw-semibold">${product.price}</p>
                    </div>
                    <div className="product-btns-parent product-absolute position-absolute rounded-4 bg-white d-flex gap-1 p-2">
                      <button className="btn rounded-1">
                        <FontAwesomeIcon icon="fa-regular fa-heart" />
                      </button>
                      <button
                        className="btn rounded-1 w-100"
                        onClick={() =>
                          this.props.onCheckProductBeforeAdd({
                            ...product,
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
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    );
  }
}
