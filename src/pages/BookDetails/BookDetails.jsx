import { useParams, useNavigate, Outlet } from "react-router-dom";
import books from "../../data/books";

function BookDetails() {
  const navigate = useNavigate();
  function addReview() {
    navigate("reviews");
  }
  const { bookId } = useParams();

  const currentBook = books.find((book) => {
    return +book.id === +bookId;
  });

  return (
    <div>
      <p>Title: {currentBook.title}</p>
      <p>Author: {currentBook.author}</p>
      <p>Rating: {currentBook.rating}</p>
      <button type="button" onClick={addReview}>
        add review
      </button>
      <Outlet />
    </div>
  );
}

export default BookDetails;
