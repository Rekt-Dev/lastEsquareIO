//import * as ReactDOMClient from 'react-dom/client';
import React, { useState } from "react";
import "./App.css";
import { Header } from "./componenets/Header";
import { Card } from "./componenets/Card";
//import requestOptions from "./services/requestOptions"
const MockCard = (props) => {
  return <div>{JSON.stringify(props.item)}</div>;
};
const App = () => {
  const [jsonData, setJsonData] = useState();

  async function getData(usersSearch) {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${usersSearch}`
    );
    setJsonData(await response.json());
  }

  return (
    <div>
      <Header search={getData} />
      <br />
      <div>
        {jsonData
          ? jsonData.items.map((singleBook, index) => (
              <MockCard key={index} item={singleBook} />
            ))
          : "Nada to show"}
      </div>
      <br />
    </div>
  );
};

export default App;
