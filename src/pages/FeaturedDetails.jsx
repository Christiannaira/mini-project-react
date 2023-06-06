import React from "react";

const FeaturedDetails = ({ book, goBack }) => {
  return (
    <>
      {/*books section layout*/}
      <section className="book">

        <div className="book-content container border p-5">

          <div className="text-white">

            <h3>{book.volumeInfo.title}</h3>

            <div className="featured-book-img p-1">
              <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={`${book.volumeInfo.title} Book Cover`} title={`${book.volumeInfo.title} Book Cover`} width={'200px'} />
            </div>



            <h4>Author:  {book.volumeInfo.authors}</h4>

            <h4>Published Date:</h4> {book.volumeInfo.publishedDate}
            <h4>Description:</h4> {book.volumeInfo.description}

          </div>

          <button className="btn btn-light" onClick={goBack}>Go Back</button>
          <div class="container mt-3">
            {/* 
            <button type="button" data-bs-toggle="modal" className="btn btn-dark" data-bs-target="#myModal">Open Modal</button> */}


          </div>

        </div>

      </section>

    </>
  );
};

export default FeaturedDetails;
