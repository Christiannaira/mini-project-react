import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Bookmark = () => {
  const [books, setBooks] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searchTerm.trim() === '') {
          setBooks([]);
        } else {
          const response = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&orderBy=newest&maxResults=12&key=AIzaSyDPQiYZHWTItrRbHt1NdY-S92y9gcBvAPw`
          );
          setBooks(response.data.items);
        }
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchData();
  }, [searchTerm]);

  const handleBookmark = (book) => {
    const { id, volumeInfo } = book;
    const newBookmark = {
      id,
      title: volumeInfo.title,
      url: volumeInfo.previewLink,
      image: volumeInfo.imageLinks?.thumbnail,
      author: volumeInfo.authors?.join(', '),
    };

    const isBookmarked = bookmarks.some((bookmark) => bookmark.id === newBookmark.id);
    if (isBookmarked) {
      alert('This book is already bookmarked.');
    } else {
      setBookmarks([...bookmarks, newBookmark]);
    }
  };

  const handleDeleteBookmark = (bookmarkId) => {
    const updatedBookmarks = bookmarks.filter((bookmark) => bookmark.id !== bookmarkId);
    setBookmarks(updatedBookmarks);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = e.target.elements.searchTerm.value;
    setSearchTerm(searchTerm);
    e.target.reset();
  };

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  const isBookmarked = (bookId) => {
    return bookmarks.some((bookmark) => bookmark.id === bookId);
  };

  return (
    <>
      <section className="bookmarks col-md-12">
        <div className="container bookmarks-content">
          <div className="main-content row">
            <h1 className="mb-4">BOOKMARK</h1>

            <form onSubmit={handleSearch} className="mb-4">
              <div className="input-group">
                <input type="text" name="searchTerm" className="form-control" placeholder="Search by title or author" required />
                <button type="submit" className="btn btn-primary">Search</button>
                <button type="button" className="btn btn-secondary" onClick={handleClearSearch}>Clear Search</button>
              </div>
            </form>

            <div className="row d-flex flex-wrap col-md-6">
              {books.map((book) => (
                <div key={book.id} className="col-lg-3 mb-2">
                  <div className="card h-80">
                    <img
                      src={book.volumeInfo.imageLinks?.thumbnail}
                      className="card-img-top img-fluid"
                      alt={book.volumeInfo.title}
                      style={{ maxHeight: '200px', width: '200px' }}
                    />
                    <div className="card-body">
                      <br></br>
                      {isBookmarked(book.id) ? (
                        <button className="btn btn-danger" disabled>Bookmarked</button>
                      ) : (
                        <button className="btn btn-primary" onClick={() => handleBookmark(book)}>Bookmark</button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {bookmarks.length > 0 && (
              <div className="mt-4 col-md-6">
                <h2>Bookmarks</h2>
                <ul className="list-group">
                  {bookmarks.map((bookmark) => (
                    <li key={bookmark.id} className="list-group-item">
                      <div className="d-flex justify-content-between">
                        <div>
                          <h5>{bookmark.title}</h5>
                          <p>{bookmark.author}</p>
                        </div>
                        <div>
                          <a href={bookmark.url} className="btn btn-primary mr-2">View</a>
                          <button
                            className="btn btn-danger"
                            onClick={() => handleDeleteBookmark(bookmark.id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {books.length === 0 && bookmarks.length === 0 && (
              <p>No bookmarks yet.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Bookmark;
