import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";


function ArtAndPhotography() {
  const [books, setBooks] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/books/v1/volumes?q=Photographyart&orderBy=newest&maxResults=12&key=AIzaSyCiDFODkwxGJbB7hdTCoQoiYoGRzJx7bDE"
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
        <Link to='/'>Home</Link><i className='bx bx-chevron-right'></i> <Link to="/categories">Categories</Link> <i className='bx bx-chevron-right'></i> Computer & Technology
      </div>

      <section className="featured-books" id="featured-books">
        <div className="container featured-books-content">
          <h2>Art & Photography</h2>

          <div className="row mt-3">
            {books.map((book) => (
              <div className="book col-lg-2 text-center">
                <div className="mb-3">
                  <div className="featured-book-img p-1">
                    <div className="inner-block p-1">
                      <img
                        src={book.volumeInfo.imageLinks.smallThumbnail}
                        alt={`${book.volumeInfo.title} Book Cover`}
                       
                        title={book.volumeInfo.title}
                        height={"310px"}
                        width={"100%"}
                        onClick={()=>navigate(`/bookdetails/${book.id}`)}
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

export default ArtAndPhotography;
