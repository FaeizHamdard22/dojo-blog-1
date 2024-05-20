import {useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState([
    {title: 'My new Website', body: "lorem ipsum...", author: "mario", id: 1},
    {title: 'Welcome party!', body: "lorem ipsum...", author: "luigi", id: 2},
    {title: 'Web dev top tips', body: "lorem ipsum...", author: "mario", id: 3},
  ]);

  const [name, setName] = useState("mario");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(() => {
    console.log("useEffect ran");
    console.log(blogs);
  }, [name]);

  return (
    <div className="home">
      <h2 className='home-title'>Home Page</h2>
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <button onClick={() => setName('luigi')}>Change Name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
