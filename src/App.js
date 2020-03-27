import React from "react";
import { Route } from "react-router-dom";
import Pizza from "./components/Pizza";
import Homepage from "./components/Homepage";
import styled from "styled-components";

const App = () => {
  return (
    <Header>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      {/* my routes are here */}
      <div>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/pizza" component={Pizza} />
      </div>
    </Header>
  );
};
export default App;

const Header = styled.div`
  // border: 5px solid red;
  width: 100%;
  display: flex;
  justify-content: center;
  alignitems: center;
  flex-flow: column wrap;
`;
