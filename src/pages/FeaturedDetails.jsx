import React from "react";

const FeaturedDetails = ({ book, goBack }) => {

  return (
    <>
      {/*books section layout*/}
      <div className="book">

        <div className="book-content p-5">

          <div className="d-md-flex">

            <div className="featured-book-img p-1 me-5">
              <div className="innerblock p-1 ">
                <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={`${book.volumeInfo.title} Book Cover`} title={`${book.volumeInfo.title} Book Cover`} width={'300px'} />
              </div>
            </div>

            <div className="featured-book-text mt-3">
              <h1>{book.volumeInfo.title}</h1>
              {book.volumeInfo.authors && (
                <h3>Author: {book.volumeInfo.authors.join(", ")}</h3>
              )}

              <h4>Published Date: {book.volumeInfo.publishedDate}</h4>
              <p>Description: {book.volumeInfo.description}</p>
            </div>
          </div>


          <button id="btn" className="btn btn-light" onClick={goBack}>Go Back</button>


        </div>

      </div>

    </>
  );
};

export default FeaturedDetails;
