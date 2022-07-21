//import * as ReactDOMClient from 'react-dom/client';
import React, { useState } from "react";
import "./App.css";
import { Header } from "./componenets/Header";
import { Card } from "./componenets/Card";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

//import requestOptions from "./services/requestOptions"
/* const MockCard = (props) => {
  return (
    <div>{JSON.stringify(props.item.volumeInfo.imageLinks.thumbnail)}</div>
  );
};
 */ const App = () => {
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
          : "Search the world's most comprehensive index of full-text books."}
      </div>

      <br />
    </div>
  );
};

export default App;
