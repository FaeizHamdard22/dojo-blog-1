import {useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const [name, setName] = useState("mario");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then(res => {
        return res.json();
      })
      .then(data => {
        setBlogs(data);
      })
  }, []);

  return (
    <div className="home">
      <h2 className='home-title'>Home Page</h2>
      {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />}
    </div>
  );
};

export default Home;
