import { useEffect, useState } from "react";
import axios from "axios";
import FeaturedDetails from "./FeaturedDetails";

function FeaturedBooks() {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/books/v1/volumes?q=best-books&maxResults=24&key=AIzaSyDPQiYZHWTItrRbHt1NdY-S92y9gcBvAPw"
        );
        setBooks(response.data.items);
      } catch (error) {
        console.error("Error fetching books:", error);
      }

    };

    fetchData();
  }, [FeaturedBooks]);


  const handleBookClick = (book) => {
    setSelectedBook(book);

  };

  const handleGoBack = () => {
    setSelectedBook(null);
  };

  if (selectedBook) {
    return <FeaturedDetails book={selectedBook} goBack={handleGoBack} />;
  }


  return (
    <>
      <section className="featured-books" id="featured-books">
        <div className="container featured-books-content">

          <h2>BEST BOOKS</h2>

          <div className="row">
            {books.map((book) => (
              <div key={book.id} className="book col-lg-2">

                <div className="featured-img text-center p-1">
                  <div className="innerblock p-1">
                    {book.volumeInfo.imageLinks && (
                      <img
                        className=""
                        src={book.volumeInfo.imageLinks.smallThumbnail}
                        alt="Book Cover"
                        onClick={() => handleBookClick(book)} height={'300px'} width={'100%'}
                      />
                    )}
                  </div>

                </div>


              </div>

            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default FeaturedBooks;
