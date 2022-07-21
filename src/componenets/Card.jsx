export function Card(props) {
  return (
    <>
      <div className="centered">
        <img
          width="140rem"
          height="30%"
          alt=" Book Title"
          src={props.item.volumeInfo.imageLinks.thumbnail}
        />{" "}
        : "https://books.google.co.il/googlebooks/images/no_cover_thumb.gif"
        <div
          className="center"
          style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
        ></div>
        <ul>
          {}
          <li numberOfLines={1} ellipsizeMode="tail">
            Author: {props.item.volumeInfo.authors || "Author Name"}
          </li>

          <li numberOfLines={1} ellipsizeMode="tail">
            Title: {props.item.volumeInfo.title || "Title Name"}
          </li>
        </ul>
      </div>
    </>
  );
}
