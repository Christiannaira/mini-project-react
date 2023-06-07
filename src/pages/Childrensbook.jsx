import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { addToBookmark } from "./bookmarkService";


function Childrensbook() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  const handleBookmark = (book) => {
    addToBookmark(book);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/books/v1/volumes?q=Childrensbook&orderBy=newest&maxResults=12&key=AIzaSyCiDFODkwxGJbB7hdTCoQoiYoGRzJx7bDE"
        );
        setBooks(response.data.items);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section className="featured-books" id="featured-books">
        <div className="container featured-books-content">
          <h2>Children's Book</h2>

          <div className="row mt-3">
            {books.map((book) => (
              <div className="book col-md-2 text-center" key={book.id}>
                <div className="mb-3">
                  <div className="featured-book-img p-1">
                    <div className="innerblock p-1">
                      <img src={book.volumeInfo.imageLinks.smallThumbnail}
                        alt={`${book.volumeInfo.title} Book Cover`}
                        title={book.volumeInfo.title}
                        height={"310px"}
                        width={"100%"}
                        onClick={() => navigate(`/bookdetails/${book.id}`)} />
                    </div>
                  </div>
                  <button
                    className="bookmark-icon"
                    onClick={() => handleBookmark(book)}
                  >Add to Bookmark</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >
    </>
  );
}

export default Childrensbook;