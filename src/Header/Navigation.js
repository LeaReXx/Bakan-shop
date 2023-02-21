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
    this.treeMenuHandler = this.treeMenuHandler.bind(this);
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

  treeMenuHandler(event) {
    let nextElem = event.currentTarget.nextElementSibling;
    event.currentTarget.classList.toggle('active')
    nextElem.classList.toggle("active");
    nextElem.classList.contains("active")
      ? (nextElem.style.height = `${nextElem.scrollHeight}px`)
      : (nextElem.style.height = "0px");
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
            <div className="mobile-nav overflow-auto position-fixed top-0 left-0">
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
                <div
                  className={`d-none ${
                    this.state.mobileMenuActiveCat === "menu"
                      ? "mobile-menu-item-parent-active"
                      : ""
                  }`}
                >
                  <ul>
                    <li className="menu-list-items p-2 border-bottom d-flex flex-wrap justify-content-between w-100">
                      <a
                        href="https://reactjs.org/"
                        className="nav-link w-75 fw-semibold"
                      >
                        Home
                      </a>
                      <span
                        className="mobile-menu-angle-tree px-2 w-25 text-end nav-link"
                        onClick={(event) => this.treeMenuHandler(event)}
                      >
                        <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                      </span>
                      <div className="tree-menu-child">
                        <ul>
                          <li className="border-bottom w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 1
                            </a>
                          </li>
                          <li className="border-bottom w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 2
                            </a>
                          </li>
                          <li className="border-bottom w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 3
                            </a>
                          </li>
                          <li className="border-bottom w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 4
                            </a>
                          </li>
                          <li className=" w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 5
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="menu-list-items p-2 border-bottom d-flex flex-wrap justify-content-between">
                      <a
                        href="https://reactjs.org/"
                        className="nav-link w-75 fw-semibold"
                      >
                        Shop
                      </a>
                      <span
                        className="mobile-menu-angle-tree px-2 w-25 text-end nav-link"
                        onClick={(event) => this.treeMenuHandler(event)}
                      >
                        <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                      </span>
                      <div className="tree-menu-child">
                        <ul>
                          <li className="border-bottom w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 1
                            </a>
                          </li>
                          <li className="border-bottom w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 2
                            </a>
                          </li>
                          <li className="border-bottom w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 3
                            </a>
                          </li>
                          <li className="border-bottom w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 4
                            </a>
                          </li>
                          <li className=" w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 5
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="menu-list-items p-2 border-bottom d-flex flex-wrap justify-content-between">
                      <a
                        href="https://reactjs.org/"
                        className="nav-link w-75 fw-semibold"
                      >
                        Blog






                      </a>
                      <span
                        className="mobile-menu-angle-tree px-2 w-25 text-end nav-link"
                        onClick={(event) => this.treeMenuHandler(event)}
                      >
                        <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                      </span>
                      <div className="tree-menu-child">
                        <ul>
                          <li className="border-bottom w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 1
                            </a>
                          </li>
                          <li className="border-bottom w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 2
                            </a>
                          </li>
                          <li className="border-bottom w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 3
                            </a>
                          </li>
                          <li className="border-bottom w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 4
                            </a>
                          </li>
                          <li className=" w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 5
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="menu-list-items p-2 border-bottom d-flex flex-wrap justify-content-between">
                      <a
                        href="https://reactjs.org/"
                        className="nav-link w-75 fw-semibold"
                      >
                        Pages
                      </a>
                      <span
                        className="mobile-menu-angle-tree px-2 w-25 text-end nav-link"
                        onClick={(event) => this.treeMenuHandler(event)}
                      >
                        <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                      </span>
                      <div className="tree-menu-child">
                        <ul>
                          <li className="border-bottom w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 1
                            </a>
                          </li>
                          <li className="border-bottom w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 2
                            </a>
                          </li>
                          <li className="border-bottom w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 3
                            </a>
                          </li>
                          <li className="border-bottom w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 4
                            </a>
                          </li>
                          <li className=" w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 5
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
                <div
                  className={`d-none ${
                    this.state.mobileMenuActiveCat === "category"
                      ? "mobile-menu-item-parent-active"
                      : ""
                  }`}
                >
                  <ul>
                    <li className="menu-list-items p-2 border-bottom d-flex flex-wrap justify-content-between w-100">
                      <a
                        href="https://reactjs.org/"
                        className="nav-link w-75 fw-semibold"
                      >
                        ashion &amp; Jewelry
                      </a>
                      <span
                        className="mobile-menu-angle-tree px-2 w-25 text-end nav-link"
                        onClick={(event) => this.treeMenuHandler(event)}
                      >
                        <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                      </span>
                      <div className="tree-menu-child">
                        <ul>
                          <li className="border-bottom w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 1
                            </a>
                          </li>
                          <li className="border-bottom w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 2
                            </a>
                          </li>
                          <li className="border-bottom w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 3
                            </a>
                          </li>
                          <li className="border-bottom w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 4
                            </a>
                          </li>
                          <li className=" w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 5
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="menu-list-items p-2 border-bottom d-flex flex-wrap justify-content-between">
                      <a
                        href="https://reactjs.org/"
                        className="nav-link w-75 fw-semibold"
                      >
                        Smartphones
                      </a>
                      <span
                        className="mobile-menu-angle-tree px-2 w-25 text-end nav-link"
                        onClick={(event) => this.treeMenuHandler(event)}
                      >
                        <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                      </span>
                      <div className="tree-menu-child">
                        <ul>
                          <li className="border-bottom w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 1
                            </a>
                          </li>
                          <li className="border-bottom w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 2
                            </a>
                          </li>
                          <li className="border-bottom w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 3
                            </a>
                          </li>
                          <li className="border-bottom w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 4
                            </a>
                          </li>
                          <li className=" w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 5
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="menu-list-items p-2 border-bottom d-flex flex-wrap justify-content-between">
                      <a
                        href="https://reactjs.org/"
                        className="nav-link w-75 fw-semibold"
                      >
                        Camera &amp; Photos
                      </a>
                      <span
                        className="mobile-menu-angle-tree px-2 w-25 text-end nav-link"
                        onClick={(event) => this.treeMenuHandler(event)}
                      >
                        <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                      </span>
                      <div className="tree-menu-child">
                        <ul>
                          <li className="border-bottom w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 1
                            </a>
                          </li>
                          <li className="border-bottom w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 2
                            </a>
                          </li>
                          <li className="border-bottom w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 3
                            </a>
                          </li>
                          <li className="border-bottom w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 4
                            </a>
                          </li>
                          <li className=" w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 5
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="menu-list-items p-2 border-bottom d-flex flex-wrap justify-content-between">
                      <a
                        href="https://reactjs.org/"
                        className="nav-link w-75 fw-semibold"
                      >
                        Home &amp; Electronics
                      </a>
                      <span
                        className="mobile-menu-angle-tree px-2 w-25 text-end nav-link"
                        onClick={(event) => this.treeMenuHandler(event)}
                      >
                        <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                      </span>
                      <div className="tree-menu-child">
                        <ul>
                          <li className="border-bottom w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 1
                            </a>
                          </li>
                          <li className="border-bottom w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 2
                            </a>
                          </li>
                          <li className="border-bottom w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 3
                            </a>
                          </li>
                          <li className="border-bottom w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 4
                            </a>
                          </li>
                          <li className=" w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 5
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="menu-list-items p-2 border-bottom d-flex flex-wrap justify-content-between">
                      <a
                        href="https://reactjs.org/"
                        className="nav-link w-75 fw-semibold"
                      >
                        Electronics
                      </a>
                      <span
                        className="mobile-menu-angle-tree px-2 w-25 text-end nav-link"
                        onClick={(event) => this.treeMenuHandler(event)}
                      >
                        <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                      </span>
                      <div className="tree-menu-child">
                        <ul>
                          <li className="border-bottom w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 1
                            </a>
                          </li>
                          <li className="border-bottom w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 2
                            </a>
                          </li>
                          <li className="border-bottom w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 3
                            </a>
                          </li>
                          <li className="border-bottom w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 4
                            </a>
                          </li>
                          <li className=" w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 5
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="menu-list-items p-2 border-bottom d-flex flex-wrap justify-content-between">
                      <a
                        href="https://reactjs.org/"
                        className="nav-link w-75 fw-semibold"
                      >
                        Headphones
                      </a>
                      <span
                        className="mobile-menu-angle-tree px-2 w-25 text-end nav-link"
                        onClick={(event) => this.treeMenuHandler(event)}
                      >
                        <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                      </span>
                      <div className="tree-menu-child">
                        <ul>
                          <li className="border-bottom w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 1
                            </a>
                          </li>
                          <li className="border-bottom w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 2
                            </a>
                          </li>
                          <li className="border-bottom w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 3
                            </a>
                          </li>
                          <li className="border-bottom w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 4
                            </a>
                          </li>
                          <li className=" w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 5
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="menu-list-items p-2 border-bottom d-flex flex-wrap justify-content-between">
                      <a
                        href="https://reactjs.org/"
                        className="nav-link w-75 fw-semibold"
                      >
                        Laptop &amp; Tablet
                      </a>
                      <span
                        className="mobile-menu-angle-tree px-2 w-25 text-end nav-link"
                        onClick={(event) => this.treeMenuHandler(event)}
                      >
                        <FontAwesomeIcon icon="fa-solid fa-angle-right" />
                      </span>
                      <div className="tree-menu-child">
                        <ul>
                          <li className="border-bottom w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 1
                            </a>
                          </li>
                          <li className="border-bottom w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 2
                            </a>
                          </li>
                          <li className="border-bottom w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 3
                            </a>
                          </li>
                          <li className="border-bottom w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 4
                            </a>
                          </li>
                          <li className=" w-100 d-block">
                            <a
                              href="https://reactjs.org/"
                              className="nav-link p-2"
                            >
                              Home Page 5
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
