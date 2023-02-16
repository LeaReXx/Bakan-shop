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
          <div className="on-header-menu text-muted d-md-flex justify-content-between text-center my-1 py-2 container align-items-center">
            <div>
              <p>Hello Customer, welcome to Bakan Market!</p>
            </div>
            <div className="d-flex justify-content-center">
              <div>
                <ul className="list-unstyled d-none d-md-flex">
                  <li className="px-2 border-end">
                    <a href="" className="nav-link">
                      Store Location
                    </a>
                  </li>
                  <li className="px-2 border-end">
                    <a href="" className="nav-link">
                      Track Your Orders
                    </a>
                  </li>
                  <li className="px-2 border-end">
                    <a href="" className="nav-link">
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
        <div>
            <div></div>
        </div>
      </header>
    );
  }
}
