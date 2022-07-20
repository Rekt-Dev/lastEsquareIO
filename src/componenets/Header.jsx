import { useState } from "react";
import { getData } from "../App";
import requestOptions from "../services/requestOptions";

export function Header(props) {
  const [usersSearch, setUsersSearch] = useState("");

  return (
    <>
      <input
        onChange={(e) => setUsersSearch(e.target.value)}
        type={"text"}
        placeholder={"Enter Your Search Here..."}
      />

      <br />
      <button
        onClick={() => {
          props.search(usersSearch);
        }}
      >
        search
      </button>
    </>
  );
}
