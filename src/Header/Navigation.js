import React, { createRef, PureComponent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Navigation extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      mobileMenuActiveCat: "menu",
    };
    this.mobileMenu = createRef();
    this.mobileMenuCloseOutSide = this.mobileMenuCloseOutSide.bind(this);
    this.mobileMenuToggle = this.mobileMenuToggle.bind(this);
    this.mobileMenuCatHandler = this.mobileMenuCatHandler.bind(this);
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

  mobileMenuCatHandler(event) {
    this.setState({ mobileMenuActiveCat: event.target.dataset.catName });
  }

  render() {
    return (
      <>
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
              <div className="mobile-nav-close-btn-parent mx-auto my-2 px-2">
                <button
                  className="btn btn-outline-danger w-100"
                  onClick={this.mobileMenuToggle}
                >
                  <FontAwesomeIcon icon="fa-solid fa-xmark" /> Close
                </button>
              </div>
              <div>
                <div className="border-1 border-top border-bottom px-2">
                  <button
                    className={`btn text-muted w-50 text-start ${
                      this.state.mobileMenuActiveCat === "menu"
                        ? "mobile-active-category"
                        : ""
                    }`}
                    onClick={(event) => this.mobileMenuCatHandler(event)}
                    data-cat-name="menu"
                  >
                    <FontAwesomeIcon icon="fa-solid fa-bars" /> Menu
                  </button>
                  <button
                    className={`btn text-muted w-50 text-start ${
                      this.state.mobileMenuActiveCat === "category"
                        ? "mobile-active-category"
                        : ""
                    }`}
                    onClick={(event) => this.mobileMenuCatHandler(event)}
                    data-cat-name="category"
                  >
                    <FontAwesomeIcon icon="fa-solid fa-list-ul" /> Category
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
