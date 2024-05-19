import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Payment from "./Payment";

function Customer() {
  var email = useRef();
  var password = useRef();
  var name = useRef();
  var phon = useRef();

  var loginUser = (event) => {
    event.preventDefault();
    var em = email.current.value;
    var pass = password.current.value;
    var nm = name.current.value;
    var ph = phon.current.value;
    if (em === "" || pass === "" || nm === "" || ph === "") {
      alert("All fields must be filled out");
      return; // Prevent further execution if fields are empty
    }

    // Check for valid phone number length and starting digit
    if (ph.length < 9 || ph.length > 10 || !/[6-9]/.test(ph[0])) {
      alert("Phone number should 10 digits long and start with 6, 7, 8 or 9.");
      return;
    }
    navigate("/payment");
  };
  const navigate = useNavigate();
  return (
    <>
      <div className="jumbotron">
        <div className="container text-center">
          <h1>Fill your details!</h1>
        </div>
      </div>

      <div className="container-fluid bg-3 text-center">
        <div className="row">
          <div className="col-sm-12">
            <form onSubmit={loginUser}>
              <div className="form-group">
                <label htmlFor="name">Name : </label>
                <input
                  type="name"
                  ref={name}
                  className="form-control"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phon">Mobile Number : </label>
                <input
                  type="number"
                  ref={phon}
                  className="form-control"
                  placeholder="Enter Mobile number"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address : </label>
                <input
                  type="email"
                  ref={email}
                  className="form-control"
                  placeholder="Enter Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="pwd">Password : </label>
                <input
                  type="password"
                  ref={password}
                  className="form-control"
                  placeholder="Enter Password"
                />
              </div>
              <div className="form-group">
                <button
                  type="submit"
                  className="btn btn-success form-control"
                  onClick={loginUser}
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Customer;