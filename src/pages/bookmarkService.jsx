export const addToBookmark = (book) => {
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    const newBookmark = {
      id: book.id,
      title: book.volumeInfo.title,
      url: book.volumeInfo.previewLink,
      image: book.volumeInfo.imageLinks?.thumbnail,
      author: book.volumeInfo.authors?.join(", "),
    };
  
    const isBookmarked = bookmarks.some(
      (bookmark) => bookmark.id === newBookmark.id
    );
  
    if (isBookmarked) {
      alert("This book is already bookmarked.");
    } else {
      bookmarks.push(newBookmark);
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
      alert("Book has been bookmarked!");
    }
  };
