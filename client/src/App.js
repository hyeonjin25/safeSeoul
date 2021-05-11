import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./router/Main";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div style={{ minHeight: "70vh", padding: "20px 0 20px 0" }}>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
