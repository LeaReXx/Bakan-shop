import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Footer.css";
export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.socials = [
      {
        id: 1,
        title: "facebook",
        url: "https://reactjs.org/",
        icon: "fa-brands fa-facebook",
      },
      {
        id: 2,
        title: "facebook",
        url: "https://reactjs.org/",
        icon: "fa-brands fa-twitter",
      },
      {
        id: 3,
        title: "facebook",
        url: "https://reactjs.org/",
        icon: "fa-brands fa-instagram",
      },
      {
        id: 4,
        title: "facebook",
        url: "https://reactjs.org/",
        icon: "fa-brands fa-youtube",
      },
      {
        id: 5,
        title: "facebook",
        url: "https://reactjs.org/",
        icon: "fa-brands fa-linkedin",
      },
    ];

    this.navLinks = [
      {
        id: 1,
        title: "About Us",
        items: [
          { id: 1, text: "Shipping & Returns", url: "https://reactjs.org/" },
          { id: 2, text: "Secure Shopping", url: "https://reactjs.org/" },
          { id: 3, text: "Order Status", url: "https://reactjs.org/" },
          {
            id: 4,
            text: "International Shipping",
            url: "https://reactjs.org/",
          },
          { id: 5, text: "About Us", url: "https://reactjs.org/" },
        ],
      },
      {
        id: 2,
        title: "Our Services",
        items: [
          { id: 1, text: "Privacy Policy", url: "https://reactjs.org/" },
          { id: 2, text: "Customer Service", url: "https://reactjs.org/" },
          { id: 3, text: "Orders and Returns", url: "https://reactjs.org/" },
          {
            id: 4,
            text: "Track Your Orders",
            url: "https://reactjs.org/",
          },
          { id: 5, text: "Contact Us", url: "https://reactjs.org/" },
        ],
      },

      {
        id: 3,
        title: "Information",
        items: [
          {
            id: 1,
            text: "International Shipping",
            url: "https://reactjs.org/",
          },
          { id: 2, text: "Secure Shopping", url: "https://reactjs.org/" },
          { id: 3, text: "Order Status", url: "https://reactjs.org/" },
          {
            id: 4,
            text: "Shipping & Returns",
            url: "https://reactjs.org/",
          },
          { id: 5, text: "About Us", url: "https://reactjs.org/" },
        ],
      },
      {
        id: 4,
        title: "Extras",
        items: [
          { id: 1, text: "Shipping & Returns", url: "https://reactjs.org/" },
          { id: 2, text: "Secure Shopping", url: "https://reactjs.org/" },
          { id: 3, text: "Order Status", url: "https://reactjs.org/" },
          {
            id: 4,
            text: "International Shipping",
            url: "https://reactjs.org/",
          },
          { id: 5, text: "About Us", url: "https://reactjs.org/" },
        ],
      },
    ];
  }

  render() {
    return (
      <footer>
        <div className="footer-top">
          <div className="mx-auto">
            <div className="row g-0">
              <div className="col-12 col-lg-4">
                <div className="footer-top-social-parent d-flex align-items-center justify-content-between px-3 py-3">
                  {this.socials.map((social) => {
                    return (
                      <a
                        href={social.url}
                        key={social.id}
                        className="rounded-5 bg-white text-black d-flex align-items-center justify-content-center mx-1 mx-xl-2 fs-5"
                      >
                        <FontAwesomeIcon icon={`${social.icon}`} />
                      </a>
                    );
                  })}
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="text-center text-white py-3 d-flex flex-column justify-content-center h-100">
                  <strong>NEED HELP? CALL OUR AWARD-WINNING</strong>
                  <span>SUPPORT TEAM 24/7 AT (844) 555-8386</span>
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="footer-subscribe-form-parent mx-auto h-100 d-flex align-items-center justify-content-center h-100 py-2">
                  <form className="position-relative mx-4">
                    <input
                      type="text"
                      className="form-control w-100 py-3 rounded-5"
                      placeholder="Enter your Email Address"
                    />
                    <input
                      type="submit"
                      value={"Subscribe"}
                      className=" footer-subscribe-form-submit rounded-5 position-absolute py-2 px-3 me-2 "
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-middle bg-white py-4">
          <div className="container-fluid container-lg row mx-auto">
            <div className="col-12 col-md-6 col-lg-4">
              <article className="footer-middle-contact">
                <div className="d-flex align-items-center">
                  <div className="d-flex align-items-center justify-content-center rounded-1 mx-2">
                    <FontAwesomeIcon
                      icon="fa-solid fa-location-dot"
                      className="fs-5"
                    />
                  </div>
                  <p>561 Wellington Road, Suite 115, Gainesville, VA 20155</p>
                </div>
                <div className="d-flex align-items-center">
                  <div className="d-flex align-items-center justify-content-center rounded-1 mx-2">
                    <FontAwesomeIcon
                      icon="fa-solid fa-phone"
                      className="fs-5"
                    />
                  </div>
                  <p>888 9344 6000 - 888 1234 6789</p>
                </div>
                <div className="d-flex align-items-center">
                  <div className="d-flex align-items-center justify-content-center rounded-1 mx-2">
                    <FontAwesomeIcon
                      icon="fa-solid fa-envelope"
                      className="fs-5"
                    />
                  </div>
                  <a href="mailto:dev.sepehr@outlook.com" className="nav-link">
                    Dev.sepehr@outlook.com
                  </a>
                </div>
                <div className="d-flex align-items-center">
                  <div className="d-flex align-items-center justify-content-center rounded-1 mx-2">
                    <FontAwesomeIcon
                      icon="fa-solid fa-clock"
                      className="fs-5"
                    />
                  </div>
                  <p>7 Days a week from 10-00 am to 6-00 pm</p>
                </div>
              </article>
            </div>
            {this.navLinks.map((linkGroup) => {
              return (
                <div className="col-12 col-sm-6 col-lg-2">
                  <article className="footer-nav-item-parent  px-2 my-4 my-md-0">
                    <strong className="fs-5 fw-semibold position-relative">
                      {linkGroup.title}
                    </strong>
                    <ul className="mt-2 list-unstyled">
                      {linkGroup.items.map((linkGroupChild) => {
                        return (
                          <li className="text-muted">
                            <a
                              href={linkGroupChild.url}
                              className="nav-link py-1"
                            >
                              {linkGroupChild.text}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </article>
                </div>
              );
            })}
          </div>
        </div>
        <div className="footer-bottom bg-white mx-auto">
          <div className="container-fluid container-lg border-1 border-top py-3 d-flex justify-content-between ">
            <div className="d-flex">
              <p>©Copyright 2023, Redesign by </p>
              <a href="https://github.com/LeaReXx" className="nav-link px-1">
                Sepehr Aghapour
              </a>
            </div>
            <div>
              <img src="./imgs/footer/payment.png" alt="Payments" />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
