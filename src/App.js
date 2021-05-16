import React from 'react';
 //import Header from "./component/Header";
 //import Footer from "./component/Footer";
import Main from "./router/Main";
import Map from "./router/Map";
 import Third from "./router/Third";
 import { BrowserRouter, Route, Switch } from "react-router-dom";

 function App() {
   return (
     <BrowserRouter>
       {/* <Header />*/ }
       <div>
         <Switch>
           <Route exact path="/" component={Main} />
           <Route exact path="/map" component={Map} />
           <Route exact path="/third" component={Third} />
         </Switch>
       </div>
       {/* <Footer /> */}
     </BrowserRouter>
   );
 }
 
 export default App;
 