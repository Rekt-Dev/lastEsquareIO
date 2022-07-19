//import * as ReactDOMClient from 'react-dom/client';
import React, { useState } from "react";
import "./App.css";
import { Header } from "./componenets/Header";
import { usersSearch, constructedLink, getData } from "./componenets/Header";
import { Card } from "./componenets/Card";
//import requestOptions from "./services/requestOptions"

const App = () => {
  const [data, setData] = useState();

  async function getData(str) {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${usersSearch}`
    );
    setData(await response.json());
  }

  return (
    <div>
      <Header search={getData} />
      <br />
      <Card />
      <br />
      <>bruv</>
    </div>
  );
};

export default App;
