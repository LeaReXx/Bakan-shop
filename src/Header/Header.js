import React, { Component, createRef } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.mobileMenu = createRef();
    this.getMultiElem = createRef([]);
    this.state = {
      lang: "en",
      langDropDown: "fade-out",
    };
    this.mobileMenuCloseOutSide = this.mobileMenuCloseOutSide.bind(this);
    this.changeLangDropHandler = this.changeLangDropHandler.bind(this);
    this.mobileMenuToggle = this.mobileMenuToggle.bind(this);
  }

  mobileMenuCloseOutSide(event) {
    if (event.target !== event.currentTarget) {
      return;
    }
    this.mobileMenuToggle();
  }

  mobileMenuToggle() {
    this.mobileMenu.current.classList.toggle("active");
  }

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
                    onClick={this.mobileMenuCloseOutSide}
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
                    onClick={this.mobileMenuCloseOutSide}
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
        <div className="container-fluid container-lg row my-3 my-lg-4 mx-auto gy-3 gy-md-0 justify-content-center justify-content-md-between">
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
              <span className="header-shopping-cart-count-badge position-absolute border border-2 border-white border-white top-0 start-100 translate-middle badge rounded-pill ">
                5
              </span>
              <FontAwesomeIcon icon="fa-regular fa-heart" />
            </div>
            <div className="position-relative nav-link">
              <span className="header-wishlist-count-badge position-absolute border border-2 border-white border-white top-0 start-100 translate-middle badge rounded-pill ">
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
        <nav>
          <div className="container-fluid container-lg d-flex justify-content-between align-items-center text-white h-100">
            <div className="main-desktop-nav-parent d-flex align-items-center">
              <div
                className="mobile-menu-humbugger fs-2 rounded-1 p-1 d-lg-none"
                onClick={this.mobileMenuToggle}
              >
                <FontAwesomeIcon icon="fa-solid fa-bars" />
              </div>
              <div className="shop-by-category-nav align-items-center ps-3 pe-5 fw-semibold d-none d-lg-flex">
                <FontAwesomeIcon icon="fa-solid fa-bars" />
                <p className="ps-3">SHOP BY CATEGORIES</p>
              </div>
              <div className="main-desktop-menu d-none d-lg-block">
                <ul className="list-unstyled d-flex align-items-center">
                  <li
                    className="px-3 fw-semibold h-100"
                    style={{ color: "var(--main-color)" }}
                  >
                    <a
                      href="https://reactjs.org/"
                      className="nav-link w-100 h-100 d-flex align-items-center"
                    >
                      HOME
                    </a>
                  </li>
                  <li className="px-3 fw-semibold h-100">
                    <a
                      href="https://reactjs.org/"
                      className="nav-link w-100 h-100 d-flex align-items-center"
                    >
                      SHOP <FontAwesomeIcon icon="fa-solid fa-angle-down" />
                    </a>
                  </li>
                  <li className="px-3 fw-semibold h-100">
                    <a
                      href="https://reactjs.org/"
                      className="nav-link w-100 h-100 d-flex align-items-center"
                    >
                      BLOG <FontAwesomeIcon icon="fa-solid fa-angle-down" />
                    </a>
                  </li>
                  <li className="px-3 fw-semibold h-100">
                    <a
                      href="https://reactjs.org/"
                      className="nav-link w-100 h-100 d-flex align-items-center"
                    >
                      PAGES <FontAwesomeIcon icon="fa-solid fa-angle-down" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="nav-right-text">
              <a
                href="https://reactjs.org/"
                className="nav-link fw-semibold fs-7"
              >
                LIMITED TIME OFFER!
              </a>
            </div>
          </div>
          <div
            className="mobile-nav-parent position-fixed top-0 left-0 w-100 h-100 invisible"
            ref={this.mobileMenu}
            onClick={(event) => this.mobileMenuCloseOutSide(event)}
          >
            <div className="mobile-nav position-fixed top-0 left-0">
              <div className="mobile-nav-close-btn-parent mx-auto my-2">
                <button
                  className="btn btn-outline-danger w-100"
                  onClick={this.mobileMenuToggle}
                >
                  <FontAwesomeIcon icon="fa-solid fa-xmark" /> Close
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}
