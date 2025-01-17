import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("login successfully");
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };

  return (
    <div>
      <div className="lg:w-4/5 w-[95%] border rounded-lg  bg-slate-200 mx-auto mt-20 py-20 px-10">
        <h2 className="text-4xl font-bold mb-5">Admin Login</h2>
        <form onSubmit={handleSubmit}>
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
          <div>
            {loginError && (
              <p className="text-red-600">Incorrect email or password</p>
            )}
          </div>
          <p>
            Don't have any account?
            <Link to="/signup" className="text-red-700 mx-1">
              Sign Up
            </Link>
          </p>
          <div>
            <p>
              admin email: <span className="font-bold">admin@gmail.com</span> &
              pass: <span className="font-bold">123456</span>{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
