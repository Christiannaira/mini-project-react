import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

function Categories() {
  const location = useLocation();

  useEffect(() => {
    const linkContainer = document.getElementById("linkContainer");
    const links = linkContainer.getElementsByTagName("a");

    const sortedLinks = Array.from(links).sort((a, b) =>
      a.innerText.localeCompare(b.innerText)
    );

    for (let i = 0; i < sortedLinks.length; i++) {
      linkContainer.appendChild(sortedLinks[i]);
    }
  }, []);

  return (
    <>
      <section className="categories">
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          <i className="bx bx-chevron-right"></i> Categories{" "}
          <i className="bx bx-chevron-right"></i>
        </div>
        <div className="container categories-content">
          <h1>Categories</h1>
          <div className="row" id="linkContainer">
            <Link to="/thriller">Thriller</Link>
            <Link to="/romance">Romance</Link>
            <Link to="/business">Business</Link>
            <Link to="/self help">Self Help</Link>
            <Link to="/health & fitness">Health & Fitness</Link>
            <Link to="/mystery">Mystery</Link>
            <Link to="/travel">Travel</Link>
            <Link to="/history">History</Link>
            <Link to="/fiction & literature">Fiction & Literature</Link>
            <Link to="/realist & literature">Realist Literature</Link>
            <Link to="/magical realism">Magical Realism</Link>
            <Link to="/computer & technology">Computer & Technology</Link>
            <Link to="/sports & outdoors">Sports & Outdoors</Link>
            <Link to="/education & teaching">Education & Teaching</Link>
            <Link to="/childrenbook">Children's Books</Link>
            <Link to="/religion & spirituality">Religion & Spirituality</Link>
            <Link to="/sciencefiction & fantasy">Science Fiction & Fantasy</Link>
            <Link to="/parenting & relationships">Parenting & Relationships</Link>
            <Link to="/art & photography">Arts & Photography</Link>
            <Link to="/biographies & memoirs">Biographies & Memoirs</Link>
            <Link to="/comics & graphicnovels">Comics & Graphic Novels</Link>
            <Link to="/crafthobbies & home">Crafts, Hobbies & Home</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Categories;
