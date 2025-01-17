import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import toast from "react-hot-toast";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
        toast("User Created Successfully.");
      })
      .catch((error) => {
        setSignUpError(error.message);
        console.log(error);
      });
  };
  return (
    <div>
      <div className="lg:w-4/5 w-[95%] border rounded-lg  bg-slate-200 mx-auto mt-20 py-20 px-10">
        <h2 className="text-4xl font-bold mb-5">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <label className="form-control w-full my-4">
            <div className="label">
              <span className="label-text text-xl text-gray-600">
                Your Name
              </span>
            </div>
            <input
              type="text"
              required
              name="name"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </label>
          <label className="form-control w-full my-4">
            <div className="label">
              <span className="label-text text-xl text-gray-600">Email:</span>
            </div>
            <input
              type="email"
              required
              name="email"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </label>
          <label className="form-control w-full my-4">
            <div className="label">
              <span className="label-text text-xl text-gray-600">
                Password:
              </span>
            </div>
            <input
              type="password"
              required
              name="password"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </label>

          <button
            type="submit"
            className="btn btn-primary  text-white px-5 py-2 my-2"
          >
            Submit
          </button>
          {signUpError && <p className="text-red-600">{signUpError}</p>}
          <p>
            Already have an account
            <Link to="/login" className="text-red-700 mx-1">
              login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
