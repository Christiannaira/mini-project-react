import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function Thriller() {
  const [books, setBooks] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/books/v1/volumes?q=Thriller&orderBy=newest&maxResults=30&key=AIzaSyDE2MnXJyfh-Ncs8nWDI262F82lHuQZQk4"
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
      {/*breadcrumb section layout*/}
      <div className='book-breadcrumb'>
        <Link to='/'>Home</Link><i className='bx bx-chevron-right'></i> <Link to="/categories">Categories</Link> <i className='bx bx-chevron-right'></i> History
      </div>
      <section className="featured-books" id="featured-books">
        <div className="container featured-books-content">
          <h2>History</h2>

          <div className="row mt-3">
            {books.map((book) => (
              <div className="book col-md-2 text-center" key={book.id}>
                <div className="mb-3">
                  <div className="featured-book-img p-1">
                    <div className="inner-block p-1">
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
                  <div>
                    <button className="">Add to Bookmark</button>
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

export default Thriller;