import React from "react";
import { Route } from "react-router-dom";
import Pizza from "./components/Pizza";
import Homepage from "./components/Homepage";
import styled from "styled-components";

const App = () => {
  return (
    <Header>
      <h1>Lambda Eats</h1>
      <Question>Are you hungry?</Question>
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
  border: 5px solid black;
  width: 98%;
  padding: 5px;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
`;

const Question = styled.p`
font-weight: bold;
`
