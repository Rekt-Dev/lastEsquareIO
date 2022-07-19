//import * as ReactDOMClient from 'react-dom/client';
import React, { useState } from "react";
import "./App.css";
import { Header } from "./componenets/Header";
import { Card } from "./componenets/Card";
//import requestOptions from "./services/requestOptions"

const App = () => {
  const [jsonData, setJsonData] = useState();


  async function getData(str) {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${usersSearch}`
    );
    setJsonData(await response.json());
  }

  return (
    <div>
      <Header search={getData}
      
       />
      <br />
      <Card />
      <br />
    </div>
  );
};

export default App;
