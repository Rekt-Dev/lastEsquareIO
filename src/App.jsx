//import * as ReactDOMClient from 'react-dom/client';
import React, { useState } from "react";
import "./App.css";
import { Header } from "./componenets/Header";
import { Card } from "./componenets/Card";
//import requestOptions from "./services/requestOptions"
const MockCard = (props) => {
  return (
    <div>{JSON.stringify(props.item.volumeInfo.imageLinks.thumbnail)}</div>
  );
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
    <div className="center">
      <Header search={getData} />
      <br />
      <div className="center">
        {jsonData
          ? jsonData.items.map((singleBook, index) => (
              <Card key={index} item={singleBook} />
            ))
          : "Nada to show"}
      </div>
      )
      <br />
    </div>
  );
};

export default App;
