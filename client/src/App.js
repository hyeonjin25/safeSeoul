import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import IntroPage from "./router/IntroPage";
import MapPage from "./router/MapPage";
import DetailPage from "./router/DetailPage";
import detail_fire from "./router/detail_fire";
import detail_covid from "./router/detail_covid";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <div>
        <Switch>
          <Route exact path="/" component={IntroPage} />
          <Route exact path="/map" component={MapPage} />
          <Route exact path="/detail/:district/:date" component={DetailPage} />
          <Route exact path="/detail/:district/:date/detail_covid" component={detail_covid} />
           <Route exact path="/detail/:district/:date/detail_fire" component={detail_fire} />
        
        </Switch>
      </div>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
