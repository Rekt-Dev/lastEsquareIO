export function Card(props) {
  return (
    <>
      <div className="centered">
        <img
          alt=" Book Title"
          src={props.item.volumeInfo.imageLinks.thumbnail}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "no_cover_thumb.gif";
          }}
        />

        <div
          numberOfLines={0}
          className="center"
          style={{ backgroundColor: "rgba(251, 251, 1, 0.2)" }}
        ></div>
        <ul>
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
