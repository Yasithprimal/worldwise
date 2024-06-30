import { Link } from "react-router-dom";
import Pagenav from "../components/Pagenav";

function Homepage() {
  return (
    <div>
      <Pagenav />
      <h1>Worldwise</h1>
      <Link to={"/app"}>GO to app</Link>
    </div>
  );
}

export default Homepage;
