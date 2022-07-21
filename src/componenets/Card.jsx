export function Card(props) {
  function dataOrDefault() {
    const defaultLink =
      "https://books.google.co.il/googlebooks/images/no_cover_thumb.gif";
    const imgProp = props.item.volumeInfo.imageLinks.thumbnail;

    if (imgProp) {
      return imgProp;
    } else return defaultLink;
  }

  return (
    <>
      <div className="centered">
        <img alt=" Book Title" src={dataOrDefault()} />

        <div
          className="center"
          style={{ backgroundColor: "rgba(251, 251, 1, 0.2)" }}
        ></div>
        <ul>
          <li numberOfLines={1} ellipsizemode="tail">
            Author: {props.item.volumeInfo.authors || "Author Name"}
          </li>

          <li numberOfLines={1} ellipsizemode="tail">
            Title: {props.item.volumeInfo.title || "Title Name"}
          </li>
        </ul>
      </div>
    </>
  );
}
