import { useSelector } from "react-redux";
import { decrementQty, incrementQTy, removeItem ,emptyItem } from "../Redux/CartSlice";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import Customer from "./Customer";

function Cart() {
  const dispatch = useDispatch();
 const navigate = useNavigate();
  const selector = useSelector((state) => state.carts.value);
  const cartitem = useSelector((state) => state.carts.value);
  const totalquantity = cartitem.reduce((total,item)=>total+item.qty,0);
  const totalprice = cartitem.reduce((total,item)=>total+item.pdata.price*item.qty,0)
  
  return (
   
    <div className="container btn btn-info">
      <h1 style={{ textAlign: "center", color: "red" }}>Cart Item</h1>
      <div className="table-responsive">

        <table className="table table-bordered table-striped table-hover">
      
          <thead style={{border:"transparent"}}>
           
                       <tr>
              <th style={{color:"green",borderRadius:"50%"}}>S. No.</th>
              <th style={{color:"orange",borderRadius:"50%"}}>Image</th>
              <th style={{color:"green",borderRadius:"50%"}}>Name</th>
              <th style={{color:"orange",borderRadius:"50%"}}>Price</th>
              <th style={{color:"green",borderRadius:"50%"}}>Quantity</th>
              <th style={{color:"orange",borderRadius:"50%"}}>Amount</th>
              <th style={{color:"green",borderRadius:"50%"}}>Operation</th>
              <th style={{color:"orange",borderRadius:"50%"}}>Alldelete</th>
              <th style={{color:"orange",borderRadius:"50%"}}>Total</th>
            </tr>
          </thead>
     

          <tbody>
            
            {selector.map((data, index) => {
              console.log("Data is : " + JSON.stringify(data));
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      style={{ borderRadius: "30%" }}
                      src={data.pdata.thumbnail}
                      height={100}
                      width={100}
                    />
                  </td>
                  <td>{data.pdata.title}</td>
                  <td>{data.pdata.price}</td>
                  <td>
                    <button className="btn btn-danger"
                    onClick={()=>dispatch(decrementQty(data.pdata.id))}>
- </button>&nbsp;&nbsp;
{data.qty}&nbsp;&nbsp;
<button className="btn btn-success"
onClick={()=>dispatch(incrementQTy(data.pdata.id))}>+</button>
                  </td>
                  <td>{data.qty*data.pdata.price}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => dispatch(removeItem(data.pdata.id))}
                    >
                      Remove Item
                    </button>
                  </td>
            <td>
            <button
        className="btn btn-danger "
        style={{ float: "right" }}
        onClick={() => {
          if (window.confirm("Are you sure you want to empty the cart?")) {
            dispatch(emptyItem({}));
          }
        }}
      >
        Empty Cart
      </button>{" "}
            </td>
                </tr>
              
              );
            })}
          
          </tbody>
         
        </table>
<h1>The total value :{totalquantity}</h1>
<h1>The total price : {totalprice}</h1>
<button className="btn btn-success "onClick={navigate("/customer")}>Placeorder</button>
      </div>
    </div>
  
  
  );
}
export default Cart;
