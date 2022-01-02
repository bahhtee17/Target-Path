import "./App.css";
import React, {createContext, useState} from "react";
import Header from "./components/Header";
import Target from "./components/Target";

export const ContentValue = createContext();

const dummy_data = [
  {
    id: "1",
    date: new Date().toLocaleDateString(),
    content: "My First Output",
    category: "must",
  },
];

function App(props) {
  const [addedData, setAddedData] = useState(dummy_data);
  const onAddNewTarget = (data) => {
    setAddedData((prevData) => [...prevData, data]);
  };

  return (
    <ContentValue.Provider value={setAddedData}>
      <div className='App'>
        <Header />
        <Target onSendData={onAddNewTarget} data={addedData} />
      </div>
    </ContentValue.Provider>
  );
}

export default App;
