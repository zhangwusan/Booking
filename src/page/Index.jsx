import { Link } from "react-router-dom";
import Login from "./Login";
export default function Index() {
  return (
    <div>
      Home page <br/>
        <Link to={"/Booking/login"}>Go to Login</Link>
    </div>

  );
}