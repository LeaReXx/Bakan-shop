import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "./SectionSix.css";
export default class SectionSix extends Component {
  constructor(props) {
    super(props);
    this.blogPosts = [
      {
        id: 1,
        author: "Sepehr Aghapour",
        img: "./imgs/section-six/b10-2.jpg",
        title: "Lorem ipsum dolor sit amet",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        publishDate: 1660764600000,
      },
      {
        id: 2,
        author: "Sepehr Aghapour",
        img: "./imgs/section-six/b11-2.jpg",
        title: "Lorem ipsum dolor sit amet",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        publishDate: 1662838200000,
      },
      {
        id: 3,
        author: "Sepehr Aghapour",
        img: "./imgs/section-six/b33-2.jpg",
        title: "Lorem ipsum dolor sit amet",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        publishDate: 1664310600000,
      },
      {
        id: 4,
        author: "Sepehr Aghapour",
        img: "./imgs/section-six/b55-2.jpg",
        title: "Lorem ipsum dolor sit amet",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        publishDate: 1663965000000,
      },
      {
        id: 5,
        author: "Sepehr Aghapour",
        img: "./imgs/section-six/b88-2.jpg",
        title: "Lorem ipsum dolor sit amet",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        publishDate: 1663443000000,
      },
    ];
  }

  postDateCalc(publishDate) {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let createDate = new Date(publishDate);
    console.log(createDate);
    return (
      <div className="text-center bg-white rounded-3 d-inline-block position-absolute top-0 left-0 my-3 mx-2 p-2">
        <span className="m-0 p-0 d-block h4">{createDate.getDate()}</span>
        <span className="m-0 p-0 text-muted">
          {monthNames[createDate.getMonth()].slice(0, 3)}
        </span>
      </div>
    );
  }
  render() {
    return (
      <section className="container-fluid container-lg my-5 pb-5">
        <div className="text-center py-4">
          <h2>Latest News</h2>
        </div>
        <div className="d-flex">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1000: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            navigation={true}
            speed={1000}
            modules={[Navigation]}
            className="section-brand-swiper mySwiper"
          >
            {this.blogPosts.map((post) => {
              return (
                <SwiperSlide key={post.id}>
                  <div className="blog-post-item bg-white p-2 rounded-4">
                    <div className="rounded-3 overflow-hidden positio-relative">
                      <a href="https://reactjs.org/" className="nav-link">
                        <img
                          src={post.img}
                          alt={post.title}
                          className="w-100"
                        />
                      </a>
                      <span>{this.postDateCalc(post.publishDate)}</span>
                    </div>
                    <div className="p-2">
                      <span className="text-muted">
                        Author:{" "}
                        <a
                          href="https://reactjs.org/"
                          className="nav-link d-inline"
                        >
                          {post.author}
                        </a>
                      </span>
                      <a href="https://reactjs.org/" className="nav-link">
                        <strong className="d-block py-1 h5">
                          {post.title}
                        </strong>
                      </a>
                      <p className="text-muted">{post.description}</p>
                      <a
                        href="https://reactjs.org/"
                        className="blog-post-item-read-btn btn mt-4 px-4"
                      >
                        Read More
                      </a>
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
