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
  }

  render() {
    return (
      <footer>
        <div className="footer-top mx-auto">
          <div className="row g-0">
            <div className="col-12 col-lg-4">
              <div className="footer-top-social-parent d-flex align-items-center justify-content-center px-3 py-3">
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
                <span>
                  SUPPORT TEAM 24/7 AT (844) 555-8386
                </span>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="footer-subscribe-form-parent mx-auto h-100 d-flex align-items-center justify-content-center h-100 py-2">
                <form className="position-relative mx-4">
                  <input type="text" className="form-control w-100 py-3 rounded-5" placeholder="Enter your Email Address"/>
                  <input type="submit" value={'Subscribe'} className=" footer-subscribe-form-submit rounded-5 position-absolute py-2 px-3 me-2 " />
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
