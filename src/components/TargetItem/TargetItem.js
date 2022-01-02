import React, {useContext} from "react";
import {ContentValue} from "../../App";
const TargetItem = (props) => {
  const setAddedData = useContext(ContentValue);
  return (
    <div>
      <div>
        <h3>To {props.date}</h3>
        <button
          onClick={() => {
            setAddedData((preData) => {
              return preData.filter((goal) => {
                return goal.id !== props.id;
              });
            });
          }}>
          exit
        </button>
      </div>
      <div>
        <p>{props.content}</p>
      </div>
      <div>
        <h3>{props.category}</h3>
        <button>change</button>
        <button>confirm</button>
      </div>
    </div>
  );
};

export default TargetItem;
