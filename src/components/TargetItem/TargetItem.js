import React from "react";

const TargetItem = (props) => {
  return (
    <div>
      <div>
        <h3>To {props.date}</h3>
        <button>exit</button>
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
