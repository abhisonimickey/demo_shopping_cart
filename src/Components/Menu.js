import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Menu = () => {
  const data = useSelector((state) => state.carts.value);
  return (
    <div className="container">
      <h1
        className="bg-success text-danger text-center"
        style={{ padding: 10 }}
      >
        Shopping Cart
      </h1>
      <div className="container btn btn-secondary" >
        <ul className="nav navbar-nav">
          <li>
            <Link to="/" style={{ fontSize: 20 }}>
              <b>Home</b>
            </Link>
          </li>
          <li>
            <Link to="/cart" style={{ fontSize: 20 }}>
              <b>Cart({data.length})</b>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Menu;
