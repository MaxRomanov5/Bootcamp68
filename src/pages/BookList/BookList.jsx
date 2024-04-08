import books from "../../data/books";
import { Link } from "react-router-dom";

function BookList() {
  return (
    <ul>
      {books.map((book) => {
        return (
          <li key={book.id}>
            <p>{book.title}</p>
            <Link to={`${book.id}`}>
              <button>More info</button>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default BookList;
