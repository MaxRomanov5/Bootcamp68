import { useParams } from "react-router-dom";
import books from "../../data/books";

function BookDetails() {
  const { bookId } = useParams();

  const currentBook = books.find((book) => {
    return +book.id === +bookId;
  });

  return (
    <div>
      <p>Title: {currentBook.title}</p>
      <p>Author: {currentBook.author}</p>
      <p>Rating: {currentBook.rating}</p>
    </div>
  );
}

export default BookDetails;
