export function Card(props) {
  function dataOrDefault() {
    const defaultLink =
      "https://books.google.co.il/googlebooks/images/no_cover_thumb.gif";

    if (props.item.volumeInfo.imageLinks) {
      return props.item.volumeInfo.imageLinks.thumbnail;
    } else return defaultLink;
  }

  return (
    <div className="centered" resizeMode="cover" borderRadius={20}>
      <img
        resizeMode="cover"
        borderRadius={20}
        alt=" Book Title"
        src={dataOrDefault()}
      />

      <div
        resizeMode="cover"
        borderRadius={30}
        className=""
        style={{ backgroundColor: "rgba(251, 251, 1, 0.2)" }}
      ></div>
      <ul>
        <li numberOfLines={1} ellipsizemode="tail" className="">
          Author: {props.item.volumeInfo.authors || "Author Name"}
        </li>

        <li numberOfLines={1} ellipsizemode="tail">
          Title: {props.item.volumeInfo.title || "Title Name"}
        </li>
      </ul>
    </div>
  );
}
