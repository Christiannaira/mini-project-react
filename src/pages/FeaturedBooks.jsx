import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

function FeaturedBooks() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(

          "https://www.googleapis.com/books/v1/volumes?q=best-books&orderBy=newest&maxResults=24&key=AIzaSyCiDFODkwxGJbB7hdTCoQoiYoGRzJx7bDE"


        );
        setBooks(response.data.items);

      } catch (error) {
        console.error("Error fetching books:", error);
      }

    };

    fetchData();
  }, [FeaturedBooks]);

  return (
    <>
      <section className="featured-books" id="featured-books">
        <div className="container featured-books-content">
          <h2>BEST BOOKS</h2>


          <div className="row mt-3">
            {books.map((book) => (
              <div className="book col-md-2 text-center">
                <div className="mb-3">
                  <div className="featured-book-img p-1">
                    <div className="innerblock p-1">
                      <img
                        src={book.volumeInfo.imageLinks.smallThumbnail}
                        alt={`${book.volumeInfo.title} Book Cover`}

                        title={book.volumeInfo.title}
                        height={"310px"}
                        width={"100%"}
                        onClick={() => navigate(`/bookdetails/${book.id}`)}
                      />
                    </div>
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
