import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import IntroPage from "./router/IntroPage";
import MapPage from "./router/MapPage";
import DetailPage from "./router/DetailPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <div>
        <Switch>
          <Route exact path="/" component={IntroPage} />
          <Route exact path="/map" component={MapPage} />
          <Route exact path="/detail/:district" component={DetailPage} />
        </Switch>
      </div>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
