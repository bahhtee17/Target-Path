import React, {useState} from "react";

const InputItem = () => {
  const [inputText, setInputText] = useState("");
  const [selectCategory, setSelectCategory] = useState("");
  const [inputDate, setInputDate] = useState("");

  return (
    <form>
      <div>
        <input type='text' placeholder='Add Target' />
      </div>
      <div>
        <select>
          <option>Must</option>
          <option>Will</option>
          <option>Might</option>
        </select>
      </div>
      <div>
        <input type='date' />
      </div>
      <div>
        <button type='submit'>Add Target</button>
      </div>
    </form>
  );
};

export default InputItem;
