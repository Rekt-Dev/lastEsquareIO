import { useState } from "react";

export function Header(props) {
  const [usersSearch, setUsersSearch] = useState("");

  return (
    <>
      <div className="center" borderRadius={30} resizeMode="cover">
        <input
          onChange={(e) => setUsersSearch(e.target.value.trim())}
          type={"text"}
          placeholder={"Enter Your Search Here..."}
        />

        <br />

        <br />
        <br />
        <br />
      </div>
      <button
        disabled={!usersSearch}
        className="centered"
        onClick={() => {
          props.search(usersSearch.trim());
        }}
      >
        search
      </button>
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
