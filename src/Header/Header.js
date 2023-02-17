import React, { Component } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: "en",
      langDropDown: "fade-out",
    };

    this.changeLanguage = this.changeLanguage.bind(this);
    this.changeLangDropHandler = this.changeLangDropHandler.bind(this);
  }

  changeLanguage() {}

  changeLangDropHandler() {
    this.state.langDropDown === "fade-out"
      ? this.setState({ langDropDown: "fade-in" })
      : this.setState({ langDropDown: "fade-out" });
  }

  render() {
    return (
      <header>
        <div className="border-bottom">
          <div className="on-header-menu container-fluid container-lg text-muted d-md-flex justify-content-between text-center my-1 py-2 align-items-center">
            <div>
              <p>Hello Customer, welcome to Bakan Market!</p>
            </div>
            <div className="d-flex justify-content-center mt-2 mt-md-0">
              <div>
                <ul className="list-unstyled d-none d-md-flex">
                  <li className="px-2 border-end">
                    <a href="https://reactjs.org/" className="nav-link">
                      Store Location
                    </a>
                  </li>
                  <li className="px-2 border-end">
                    <a href="https://reactjs.org/" className="nav-link">
                      Track Your Orders
                    </a>
                  </li>
                  <li className="px-2 border-end">
                    <a href="https://reactjs.org/" className="nav-link">
                      FAQs
                    </a>
                  </li>
                </ul>
              </div>
              <div className="position-relative change-lang-drop-down">
                <span
                  className="px-2 border-end"
                  onClick={this.changeLangDropHandler}
                >
                  <img
                    src="./imgs/flags/us-flag.png"
                    alt=""
                    className="change-language-icon mx-1"
                  />
                  English
                  <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
                </span>
                <div
                  className={`bg-white ${this.state.langDropDown} w-50 d-flex flex-column w-100 border rounded-2`}
                >
                  <a
                    href="https://reactjs.org/"
                    value="en"
                    onClick={this.changeLanguage}
                    className=" nav-link me-3"
                  >
                    <img
                      src="./imgs/flags/us-flag.png"
                      alt=""
                      className="change-language-icon mx-1"
                    />
                    English
                  </a>
                  <a
                    href="https://reactjs.org/"
                    value="ru"
                    onClick={this.changeLanguage}
                    className=" nav-link me-3"
                  >
                    <img
                      src="./imgs/flags/ru-flag.png"
                      alt=""
                      className="change-language-icon mx-1"
                    />
                    Russian
                  </a>
                </div>
              </div>
              <div className="px-2">
                <select name="" id="" className="border-0 text-muted">
                  <option value="">USD</option>
                  <option value="">EUR</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid container-lg row mt-md-4 mx-auto gy-3 gy-md-0 justify-content-center justify-content-md-between">
          <div className="header-logo-parent col-8 col-md-3  align-self-center">
            <img
              src="./imgs/bakan-logo.png"
              alt="Header Logo"
              className="w-100"
            />
          </div>
          <div className="header-search-parent col-12 col-md-5 col-lg-6  align-self-center">
            <div className="header-search rounded-5 m-auto d-flex justify-content-between align-items-center">
              <div className="header-search-category-parent border-end d-none d-lg-block px-3">
                <select className="border-0">
                  <option value="">Food</option>
                  <option value="">Car</option>
                  <option value="">Electronic</option>
                  <option value="">House</option>
                  <option value="">Body</option>
                  <option value="">Women</option>
                </select>
              </div>
              <div className="header-search-input-parent">
                <input
                  type="text"
                  className="border-0 ps-3 w-100"
                  placeholder="Search For Products"
                />
              </div>

              <div className="header-search-submit-parent d-flex justify-content-center align-items-center">
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
              </div>
            </div>
          </div>
          <div className="header-icons-parent d-flex justify-content-between align-items-center col-10 col-md-4 col-lg-3 align-self-center">
            <div className="position-relative nav-link">
              <span class="header-shopping-cart-count-badge position-absolute border border-2 border-white border-white top-0 start-100 translate-middle badge rounded-pill ">
                5
              </span>
              <FontAwesomeIcon icon="fa-regular fa-heart" />
            </div>
            <div className="position-relative nav-link">
              <span class="header-wishlist-count-badge position-absolute border border-2 border-white border-white top-0 start-100 translate-middle badge rounded-pill ">
                10
              </span>
              <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
            </div>
            <div className="position-relative d-flex align-items-center">
              <FontAwesomeIcon icon="fa-regular fa-user" />
              <div className="px-2">
                <a href="https://reactjs.org/" className="nav-link fs-6">
                  Login
                </a>
                <a href="https://reactjs.org/" className="nav-link fs-6">
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
