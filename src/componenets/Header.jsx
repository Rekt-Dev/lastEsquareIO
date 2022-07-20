import { useState } from "react";

export function Header(props) {
  const [usersSearch, setUsersSearch] = useState("");

  return (
    <div className="center">
      <input
        onChange={(e) => setUsersSearch(e.target.value)}
        type={"text"}
        placeholder={"Enter Your Search Here..."}
      />

      <br />
      <button
        className="center"
        onClick={() => {
          props.search(usersSearch);
        }}
      >
        search
      </button>
    </div>
  );
}
