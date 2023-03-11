import React, { Component } from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import Header from "./Header/Header";
import SectionOne from "./section-one/SectionOne";
import SectionTwo from "./section-two/SectionTwo";
import SectionThree from "./section-three/SectionThree";
import SectionFour from "./section-four/SectionFour";
import SectionFive from "./section-five/SectionFive";
library.add(fas, far);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userShoppingCart: [],
      userShoppingCartCount: 0,
      userTotalPrice: 0,
    };

    this.checkProductBeforeAdd = this.checkProductBeforeAdd.bind(this);
    this.calcUserProductPrice = this.calcUserProductPrice.bind(this);
  }

  checkProductBeforeAdd(newProduct) {
    let itemCount = this.state.userShoppingCartCount;
    let shoppingCart = this.state.userShoppingCart;

    let findExistProduct = shoppingCart.findIndex(
      (productItem) => productItem.id === newProduct.id
    );

    if (findExistProduct !== -1) {
      let existProduct = shoppingCart[findExistProduct];
      existProduct.count += 1;
      shoppingCart[findExistProduct] = existProduct;

      this.setState({ userShoppingCart: [...shoppingCart] });
    } else {
      this.setState({
        userShoppingCart: [...shoppingCart, newProduct],
      });
    }
    this.setState({ userShoppingCartCount: (itemCount += 1) });

    toast(
      <>
        <p className="text-success mb-2 text-center">
          <FontAwesomeIcon icon="fa-solid fa-circle-check" />
          <span className="px-1"> Successfully added to cart.</span>
        </p>
        <div className="toast-add-to-cart-notif d-flex gap-3">
          <div className="w-25">
            <img
              src={newProduct.image}
              className="w-100"
              alt={newProduct.title}
            />
          </div>
          <div>
            <strong className="fw-normal fs-6">{newProduct.title}</strong>
            <div className="my-2">
              <p className="text-danger fs-3">
                ${newProduct?.priceInOffer || newProduct.price}
              </p>
            </div>
          </div>
        </div>
      </>,
      {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
    );
    this.calcUserProductPrice();
  }

  calcUserProductPrice() {
    this.setState((prevState) => {
      let totalPrice = 0;
      let shoppingCart = prevState.userShoppingCart;
      shoppingCart.forEach((item) => {
        totalPrice += (item?.priceInOffer || item.price) * item.count;
      });

      return { userTotalPrice: totalPrice.toFixed(2) };
    });
  }

  shoppingCartDeleteHandler(productID) {
    let shoppingCart = this.state.userShoppingCart;
    let indexProductInCart = shoppingCart.findIndex(
      (item) => productID === item.id
    );
    shoppingCart.splice(indexProductInCart, 1);
    this.setState({ userShoppingCart: shoppingCart });
    this.calcUserProductPrice();
  }
  render() {
    return (
      <div className="App">
        <ToastContainer />

        <Header
          {...this.state}
          shoppingCartDeleteItem={(productID) => {
            this.shoppingCartDeleteHandler(productID);
          }}
        />
        <SectionOne
          onCheckProductBeforeAdd={(product) => {
            this.checkProductBeforeAdd(product);
          }}
        />
        <SectionTwo />
        <SectionThree
          onCheckProductBeforeAdd={(product) => {
            this.checkProductBeforeAdd(product);
          }}
        />
        <SectionFour />
        <SectionFive
          onCheckProductBeforeAdd={(product) => {
            this.checkProductBeforeAdd(product);
          }}
        />
      </div>
    );
  }
}
