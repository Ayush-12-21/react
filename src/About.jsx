import React from "react";
import Card from "./Card";
import "./About.css";

function About() {
  return (
    <>
      <div className="heading">
        <h1>
          <b>About Us</b>
        </h1>
      </div>
      <div className="cardholder">
        <Card
          imgsrc="1"
          cardInfo="Ayush Kumar"
          pinfo="IIT2023257"
        />
        <Card
          imgsrc="./component/src/Images/1.jpg"
          cardInfo="Abhishek Kumar"
          pinfo="IIT2023261"
        />
        <Card
          imgsrc="./component/src/Images/1.jpg"
          cardInfo="Abhishek"
          pinfo="IIT2023258"
        />
        <Card
          imgsrc="./component/src/Images/1.jpg"
          cardInfo="Bhavishya"
          pinfo="IIT2023262"
        />
      </div>
    </>
  );
}

export default About;
