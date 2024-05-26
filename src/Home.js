import BlogList from "./BlogList";
import useFetch from "./useFetch";
import SearchBox from "./components/SearchBox";

const Home = () => {
  //data: blogs ---> means that we called the data here as blogs
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      <h2 className="home-title">All Blogs</h2>
      <SearchBox />
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="" />}
    </div>
  );
};

export default Home;
