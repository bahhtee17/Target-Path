import React, {useState, useEffect} from "react";

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
    <form onSubmit={onSubmitHandler}>
      <div>
        <input
          onChange={inputChangeHandler}
          value={inputText}
          type='text'
          placeholder='Add Target'
        />
        {inputText}
      </div>
      <div>
        <select onChange={selectChangeHandler} value={selectCategory}>
          <option value='Must'>Must</option>
          <option value='Will'>Will</option>
          <option value='Might'>Might</option>
        </select>
        {selectCategory}
      </div>
      <div>
        <input onChange={dateChangeHandler} value={inputDate} type='date' />
        {inputDate}
      </div>
      <div>
        <button type='submit'>Add Target</button>
      </div>
    </form>
  );
};

export default InputItem;
