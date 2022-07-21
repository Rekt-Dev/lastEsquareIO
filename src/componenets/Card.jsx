export function Card(props) {
  function dataOrDefault() {
    function truncate(str) {
      return str.length > 10 ? str.substring(0, 7) + "..." : str;
    }
    const defaultLink =
      "https://books.google.co.il/googlebooks/images/no_cover_thumb.gif";

    if (props.item.volumeInfo.imageLinks) {
      return props.item.volumeInfo.imageLinks.thumbnail;
    } else return defaultLink;
  }

  return (
    <div
      className={
        ("square bg-primary rounded",
        "square bg-primary rounded-top",
        "square bg-primary rounded-end",
        "square bg-primary rounded-bottom")
      }
    >
      <img
        className={
          ("square bg-primary rounded",
          "square bg-primary rounded-top",
          "square bg-primary rounded-end",
          "square bg-primary rounded-bottom",
          "square bg-primary rounded-start",
          "square bg-primary rounded-circle")
        }
        width="200px"
        height="300px"
        resizeMode="cover"
        borderRadius={20}
        alt=" Book Title"
        style={{ overflow: "hidden", textOverflow: "ellipsis" }}
        src={dataOrDefault()}
      />

      <div
        resizeMode="cover"
        borderRadius={30}
        className="truncate"
        style={{ backgroundColor: "rgba(251, 251, 1, 0.2)" }}
      ></div>
      <p
        numberOfLines={1}
        ellipsizemode="tail"
        className="truncate"
        maxlength="4"
      >
        Author: {props.item.volumeInfo.authors || "Author Name"}
      </p>

      <p
        numberOfLines={1}
        ellipsizemode="tail"
        vmaxlength="8"
        className="truncate"
      >
        Title: {props.item.volumeInfo.title || "Title Name"}
      </p>
    </div>
  );
}
