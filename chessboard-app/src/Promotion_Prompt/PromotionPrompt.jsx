import React from "react";
import "./PromotionPrompt.css";
// import "../Chess_Pieces";

function PromotionPrompt(props) {
  

  return props.trigger ? (
    <div className="promoprompt">
      <div className="promoprompt-inner">
          <input
            className="image"
            type="image"
            src={require("../Chess_Pieces/wQ.png")}
            onMouseDown={() => {
              props.setPromotion("q");
              console.log(props.promotion);
            }}
            onMouseUp={() => props.setTrigger(false)}
            alt=""
          ></input>
          <input
            className="image"
            type="image"
            src={require("../Chess_Pieces/wR.png")}
            onMouseDown={() => {
              props.setPromotion("r");
              console.log(props.promotion)
            }}
            onMouseUp={() => props.setTrigger(false)}
            alt=""
          ></input>
          <input
            className="image"
            type="image"
            src={require("../Chess_Pieces/wB.png")}
            onMouseDown={() => {
              props.setPromotion("b");
              console.log(props.promotion)
            }}
            onMouseUp={() => props.setTrigger(false)}
            alt=""
          ></input>
          <input
            className="image"
            type="image"
            src={require("../Chess_Pieces/wN.png")}
            onMouseDown={() => {
              props.setPromotion("k");
              console.log(props.promotion)
            }}
            onMouseUp={() => props.setTrigger(false)}
            alt=""
          ></input>
          {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default PromotionPrompt;