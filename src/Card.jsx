import React from "react";
import './Card.css';

function Card(props){
    return (
        <>
       <div className="contactform" id="Contact">
      <div className="card">
        <img src="./component/src/Images/1.jpg" alt="pic" className="Cardimg"/>
        <h3 className="cardInfo">{props.cardInfo}</h3>
        <h5 className="pinfo">{props.pinfo}</h5>
      </div>
    </div>
        </>
    );
}

export default Card;