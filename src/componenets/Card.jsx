export function Card(props) {
  function dataOrDefault() {
    const shortenText = (str, len) => {
      if (str.length > len) {
        if (len <= 10) {
          return str.slice(0, len - 10) + "...";
        } else {
          return str.slice(0, len) + "...";
        }
      } else {
        return str;
      }
    };
    const defaultLink =
      "https://books.google.co.il/googlebooks/images/no_cover_thumb.gif";

    if (props.item.volumeInfo.imageLinks) {
      return props.item.volumeInfo.imageLinks.thumbnail;
    } else return defaultLink;
  }

  return (
    <div className="centered" resizeMode="cover" borderRadius={20}>
      <img
        className="rounded-top"
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
        <p numberOfLines={1} ellipsizemode="tail" className="" maxlength="4">
          Author: {props.item.volumeInfo.authors || "Author Name"}
        </p>

        <p numberOfLines={1} ellipsizemode="tail" vmaxlength="8">
          Title: {props.item.volumeInfo.title || "Title Name"}
        </p>
      </ul>
    </div>
  );
}
