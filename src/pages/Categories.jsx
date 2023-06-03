import { Link } from "react-router-dom";

function Categories() {
    return (
        <>
            <section className="categories">
                <div className='breadcrumb'>
                    <Link to='/'>Home</Link><i class='bx bx-chevron-right'></i> Categories <i class='bx bx-chevron-right'></i>
                </div>
                <div className="container categories-content">
                    <h1>Categories</h1>
                    <div className="row">
                        <Link to='/thriller'>Thriller</Link>
                        <Link>Academics</Link>
                        <Link>Romance</Link>
                        <Link>Business</Link>
                        <Link>Selp-Help</Link>
                        <Link>Health & Fitness</Link>
                        <Link>Mystery</Link>
                        <Link>Thriller</Link>
                        <Link>Travel</Link>
                        <Link>History</Link>
                        <Link>Fiction & Literature</Link>


                        <Link>Realist Literature</Link>
                        <Link>Magical Realism</Link>
                        <Link>Computer & Technology</Link>

                        <Link>Sports & Outdoors</Link>

                        <Link>Education & Teaching</Link>
                        <Link>Children's Books</Link>
                        <Link>Religion & Spirituality</Link>
                        <Link>Science Fiction & Fantasy</Link>
                        <Link>Parenting & Relationships</Link>
                        <Link>Arts & Photography</Link>
                        <Link>Biographies & Memoirs</Link>
                        <Link>Comics & Graphic Novels</Link>
                        <Link>Crafts, Hobbies & Home</Link>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Categories;