import React from "react";
import { Route } from "react-router-dom";
import Pizza from "../components/Pizza";
import styled from "styled-components";

const Homepage = () => {
  return (
    <HomeStyle>
      <Button>
        <Link href="http://localhost:3000/pizza">
          Create a pizza!
          <Route exact path="/pizza" component={Pizza} />
        </Link>
      </Button>
    </HomeStyle>
  );
};

export default Homepage;

const HomeStyle = styled.div`
width: 98%;
padding: 5px;
margin: 10px;
display: flex;
justify-content: center;
align-items: center;
`

const Button = styled.div`
border: 2px solid black;
padding: 5px;
border-radius: 10px;
`
const Link = styled.a`
text-decoration: none;
color: black;
`

