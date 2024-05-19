import { useEffect, useState } from "react";
import WebService from "../WebService/WebService";
import WebAPI from "../WebService/WebAPI";
import { useDispatch } from "react-redux";
import { addItem, incrementQTy, decrementQty } from "../Redux/CartSlice";
function Home() {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    loadProducts(); //Fnction Call
  }, []);

  var loadProducts = async () => {
    const response = await WebService.getAPICall(WebAPI.getProductData);
    console.log(JSON.stringify(response));
    // const data = JSON.stringify(response);
    setProducts(response.data.products);
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center", color: "red" }}>Show Product Here !</h1>
      <div className="row">
        {products.map((res, index) => {
          return (
            <div className="col-md-3">
              <div className="col-xl-3 col-lg-3">
                <div style={{ margin: "5px" }} className="text-center">
                  <img
                    src={res.thumbnail}
                    height={80}
                    width={80}
                    className="img-rounded"
                  />
                  <br />
                  <br />
                  <h5 align="center">
                    {res.title} : {res.price}
                  </h5>
                  <b>Discount Price : {res.discountPercentage}</b>
                  <br />
                  <b>
                    {res.brand} : {res.category}
                  </b>
                  <br />
                  <button
                    className="btn btn-primary"
                    onClick={() => dispatch(addItem(res))}
                  >
                    Add to Cart
                  </button>
                </div>
                <br />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Home;
