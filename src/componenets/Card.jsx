import { data } from "../App";

export function Card(props) {
  let mockPic =
    "https://books.google.com/books/content?id=_ojXNuzgHRcC&printsec=frontcover&img=1&zoom=4&edge=curl&imgtk=AFLRE70jAbnovYhYAgBS2fMWQ42G2Q99zdUXmAZ5Q6A0EAitz5VlEN7gnWYzrRNEqKwPrWnqUZL_UGsBrrhEXsMJRHA2xOwqVuuGvf_G8DgKewXWot2KReoq8ZUvYrT4RAyXDPNQG_9Z&source=gbs_api";

  return (
    <>
      <div className="">
        <img width="60%" height="30%" alt=" Book Title" src={mockPic} />
        <div
          className=""
          style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
        ></div>
        <ul>
          {}
          <a href="./GoToAuthor">
            <li>{props.authorName || "Author Name"}</li>
          </a>
          <a href="./GoToTitle">
            <li>{props.titleName || "Title Name"}</li>
          </a>
        </ul>
      </div>
      bro this is card
    </>
  );
}
