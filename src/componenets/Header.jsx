import { useState } from "react";
import { getData } from "../App";
import requestOptions from "../services/requestOptions"

export function Header(props) {

  const [jsonData, setJsonData]= useState([])
  const [usersSearch, setUsersSearch] = useState("");}


  function sendSearch(){
    
  let baseLink = `https://www.googleapis.com/books/v1/volumes?q=`;
  let constructedLink = baseLink + usersSearch;
  
  let data1
  
    fetch(constructedLink, requestOptions)
      .then((response) => response.json())
      .then((data)=>console.log(data))
      .then((data)=> data1=data)
      .then (console.log(data1))
      .then ((data) => setJsonData(data))
      .then((data)=>console.log(data))

      return (
        <>
          <input>
            onChange={(e) => setUsersSearch(e.target.value)}
            type={"text"}
            placeholder={"Enter Your Search Here..."}
          

          </input>
          <br />
          <button
            onClick={() => {
              sendSearch
            }}
          >
            Search{jsonData}
          </button>
        </>
      );
    
    }
  
  

  

      