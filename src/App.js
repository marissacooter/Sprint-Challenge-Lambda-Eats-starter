import React from "react";
import { Route } from "react-router-dom";
import Pizza from "./components/Pizza";
import Homepage from "./components/Homepage";

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      {/* my routes are here */}
      <div>
        <Route exact path="/" component={Homepage}/>
        <Route exact path="/pizza" component={Pizza}/>
      </div>
    </>
  );
};
export default App;
