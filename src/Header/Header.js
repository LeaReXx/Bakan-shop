import React, { Component } from "react";
import Navigation from "./Navigation";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      langDropDown: "fade-out",
    };
    this.changeLangDropHandler = this.changeLangDropHandler.bind(this);
  }

  changeLangDropHandler() {
    this.state.langDropDown === "fade-out"
      ? this.setState({ langDropDown: "fade-in" })
      : this.setState({ langDropDown: "fade-out" });
  }
  render() {
    return (
      <header className="bg-white">
        <div className="border-bottom">
          <div className="on-header-menu container-fluid container-lg text-muted d-md-flex justify-content-between text-center py-2 align-items-center">
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
                    alt="Lang Flag Icon"
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
                      alt="Lang Flag Icon"
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
                      alt="Lang Flag Icon"
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
              <span className="header-shopping-cart-count-badge position-absolute border border-2  border-white top-0 start-100 translate-middle badge rounded-pill ">
                5
              </span>
              <FontAwesomeIcon icon="fa-regular fa-heart" />
            </div>
            <div className="header-shopping-cart-parent position-relative nav-link">
              <span className="header-wishlist-count-badge position-absolute border border-2  border-white top-0 start-100 translate-middle badge rounded-pill ">
                {this.props.userShoppingCartCount}
              </span>
              <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
              <div className="cursor-unset position-absolute  bg-white rounded-3">
                <h3 className="fs-5 fw-semibold p-3 border-1 border-bottom">
                  Shopping Cart
                </h3>
                <div className="shopping-cart-items-parent fs-6">
                  {this.props.userShoppingCart.length ? (
                    this.props.userShoppingCart.map((item) => {
                      return (
                        <div key={item.id}>
                          <div className="shopping-cart-item d-flex px-3 py-1 gap-3">
                            <div className="py-2">
                              <img
                                src={item.image}
                                alt="Shopping Cart Item img"
                                className="w-100"
                              />
                            </div>
                            <div>
                              <strong className="fw-normal fs-6">
                                {item.title}
                              </strong>
                              <div className="w-100 d-inline-flex justify-content-between align-items-center my-2">
                                <div>
                                  <p className="text-danger fs-6 text-black">
                                    {item.count} x $
                                    {item?.priceInOffer || item.price}
                                  </p>
                                </div>
                                <div>
                                  <button
                                    className="btn btn-outline-danger"
                                    onClick={() =>
                                      this.props.shoppingCartDeleteItem(item.id)
                                    }
                                  >
                                    <FontAwesomeIcon icon="fa-regular fa-trash-can" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <p className="text-center my-2">No products in the cart.</p>
                  )}
                </div>
                {this.props.userShoppingCart.length > 0 && (
                  <div className="border-muted border-top fs-6 p-2">
                    <div>
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="fw-semibold my-1">
                          <FontAwesomeIcon
                            icon="fa-solid fa-truck-fast"
                            className="fa-fw text-muted fs-5"
                          />
                          Transport cost:
                        </p>
                        <span className="text-success fs-5 fw-semibold">
                          {this.props.userTotalPrice > 50 ? "Free" : "$10.00"}
                        </span>
                      </div>

                      <div className="d-flex justify-content-between align-items-center">
                        <p className="fw-semibold my-1">
                          <FontAwesomeIcon
                            icon="fa-solid fa-file-invoice-dollar"
                            className="fa-fw text-muted fs-5"
                          />
                          Total price:
                        </p>
                        <span className="primary-color fs-5 fw-semibold">
                          ${this.props.userTotalPrice}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
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
        <Navigation />
      </header>
    );
  }
}
