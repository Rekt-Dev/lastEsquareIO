export function Card(props) {
  return (
    <>
      <div className="centerקג">
        <img
          width="10%"
          height="30%"
          alt=" Book Title"
          src={props.item.volumeInfo.imageLinks.thumbnail}
        />
        <div
          className=""
          style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
        ></div>
        <ul>
          {}
          <li>{props.item.volumeInfo.authors || "Author Name"}</li>

          <li>{props.item.volumeInfo.title || "Title Name"}</li>
        </ul>
      </div>
    </>
  );
}
