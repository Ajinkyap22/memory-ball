import "./Loader.css";
import loaderImage from "../../images/Loader.png";

const Loader = () => {
  return (
    <div className="loader">
      <img src={loaderImage} alt="Loading spinner" />
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
