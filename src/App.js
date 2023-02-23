import React, { Component } from "react";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import Header from "./Header/Header";
import SectionOne from "./section-one/SectionOne";
library.add(fas, far);

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Sepehr",
      age: 22,
    };
  }

  changeState(nameValue, ageValue) {
    this.setState({ username: nameValue, age: ageValue });
  }

  render() {
    return (
      <div className="App">
        <Header
          {...this.state}
          onStateChange={(userName, userAge) =>
            this.changeState(userName, userAge)
          }
        />
        <SectionOne />
      </div>
    );
  }
}
