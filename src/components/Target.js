import React, {Fragment} from "react";
import InputItem from "./Input/InputItem";
import TargetItem from "./TargetItem/TargetItem";

const Target = (props) => {
  const addDataHandler = (data) => {
    const sendedData = {
      ...data,
      id: Math.random().toString(),
    };
    props.onSendData(sendedData);
  };

  return (
    <Fragment>
      <InputItem SendData={addDataHandler} />
      {props.data.map((item) => (
        <TargetItem
          key={item.id}
          date={item.date}
          content={item.content}
          category={item.category}
        />
      ))}
    </Fragment>
  );
};

export default Target;
