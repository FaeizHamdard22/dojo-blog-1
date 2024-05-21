import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  //data: blogs ---> means that we called the data here as blogs
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      <h2 className="home-title">Home Page</h2>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
