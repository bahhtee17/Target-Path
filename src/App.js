import "./App.css";
import React, {useState} from "react";
import Header from "./components/Header";
import Target from "./components/Target";

const dummy_data = [
  {
    id: "1",
    date: "2021-01-01",
    content: "My First Output",
    category: "must",
  },
];

function App() {
  const [addedData, setAddedData] = useState(dummy_data);
  const onAddNewTarget = (data) => {
    setAddedData((prevData) => [...prevData, data]);
    console.log(data);
  };
  return (
    <div className='App'>
      <Header />
      <Target onSendData={onAddNewTarget} data={addedData} />
    </div>
  );
}

export default App;
