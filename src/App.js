import {
  Routes,
  Route,
  NavLink,
  useNavigate,
  useParams,
  useLocation,
} from "react-router-dom";
import "./App.css";

const Header = () => (
  <nav>
    <NavLink to="/">Home</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/contact">Contact</NavLink>
    <NavLink to="/blog">Blog</NavLink>
  </nav>
);

const Footer = () => (
  <footer>
    <p>Made By Me</p>
  </footer>
);

const Home = () => <h2>Home Page UPDATED</h2>;

const About = () => {
  const location = useLocation();

  console.log({ location });

  return <h2>About Page</h2>;
};

const Contact = () => <h2>Contact Page</h2>;

const Blog = () => <h2>Blog Page</h2>;

const BlogItem = () => {
  const { blogId } = useParams();

  const blogList = {
    1: {
      title: "Blog 1",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    2: {
      title: "Blog 2",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  };

  return (
    <div>
      <h2>Blog Item Page</h2>

      <h3>Blog #{blogId}</h3>

      <p>
        <b>Title:</b> {blogList[blogId]?.title}
      </p>
      <p>
        <b>Content:</b> {blogList[blogId]?.content}
      </p>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:blogId" element={<BlogItem />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
