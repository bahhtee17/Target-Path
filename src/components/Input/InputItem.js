import React, {useState, useEffect} from "react";
import classes from "./InputItem.module.css";

const InputItem = (props) => {
  const [inputText, setInputText] = useState("");
  const [selectCategory, setSelectCategory] = useState("");
  const [inputDate, setInputDate] = useState("");

  const inputChangeHandler = (event) => {
    setInputText(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setInputDate(event.target.value);
  };

  const selectChangeHandler = (event) => {
    setSelectCategory(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const dataInput = {
      date: inputDate,
      content: inputText,
      category: selectCategory,
    };
    props.SendData(dataInput);

    setInputDate("");
    setInputText("");
    setSelectCategory("");
  };

  return (
    <form className={classes.container} onSubmit={onSubmitHandler}>
      <div className={classes.textInput}>
        <input
          required
          onChange={inputChangeHandler}
          value={inputText}
          type='text'
          placeholder='Add Target'
        />
      </div>
      <div className={classes.inputDate}>
        <input
          min={new Date()}
          required
          onChange={dateChangeHandler}
          value={inputDate}
          type='date'
        />
      </div>
      <div className={classes.inputSelect}>
        <select required onChange={selectChangeHandler} value={selectCategory}>
          <option value=''>Choose the category</option>
          <option value='Must'>Must</option>
          <option value='Will'>Will</option>
          <option value='Might'>Might</option>
        </select>
      </div>
      <div className={classes.submitButton}>
        <button type='submit'>Add Target</button>
      </div>
    </form>
  );
};

export default InputItem;
