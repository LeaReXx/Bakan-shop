import React, { Component } from "react";
import "./SectionTwo.css";
export default class SectionTwo extends Component {
  render() {
    return (
      <section className="container-fluid container-lg mt-3">
        <div className="row section-two-items-parent g-3">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="rounded-4 text-center bg-white py-4">
              <div className="mb-2">
                <img
                  src="./imgs/section-two/p-1.png"
                  alt="Section two item icon"
                />
              </div>
              <strong className="fs-6">Free Shipping</strong>
              <span className="text-muted d-block">on orders over $49</span>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="rounded-4 text-center bg-white py-4">
              <div className="mb-2">
                <img
                  src="./imgs/section-two/p-2.png"
                  alt="Section two item icon"
                />
              </div>
              <strong className="fs-6">Money Guarantee</strong>
              <span className="text-muted d-block">30 days money back</span>

            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="rounded-4 text-center bg-white py-4">
              <div className="mb-2">
                <img
                  src="./imgs/section-two/p-3.png"
                  alt="Section two item icon"
                />
              </div>
              <strong className="fs-6">24/7 Help Center</strong>
              <span className="text-muted d-block">support online 24/7</span>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="rounded-4 text-center bg-white py-4">
              <div className="mb-2">
                <img
                  src="./imgs/section-two/p-4.png"
                  alt="Section two item icon"
                />
              </div>
              <strong className="fs-6">Gift Promotion</strong>
              <span className="text-muted d-block">on orders over $49</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
