import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import Header from "./Header/Header";
library.add(fas, far);
function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
