import React from "react";
import "./PromotionPrompt.css";

function PromotionPrompt(props) {
  return props.trigger ? (
    <div className="promoprompt">
      <div className="promoprompt-inner">
          <input
            className="image"
            type="image"
            src={require("../Chess_Pieces/wQ.png")}
            onMouseDown={() => 
              props.promotion('q')
            }
            onMouseUp={() => props.setTrigger(false)}
            alt=""
          ></input>
          <input
            className="image"
            type="image"
            src={require("../Chess_Pieces/wR.png")}
            onMouseDown={() => 
              props.promotion('r')
            }
            onMouseUp={() =>{
              props.setTrigger(false)
            }}
            alt=""
          ></input>
          <input
            className="image"
            type="image"
            src={require("../Chess_Pieces/wB.png")}
            onMouseDown={() => 
              props.promotion('b')
            }
            onMouseUp={() => props.setTrigger(false)}
            alt=""
          ></input>
          <input
            className="image"
            type="image"
            src={require("../Chess_Pieces/wN.png")}
            onMouseDown={() => 
              props.promotion('n')
            }
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