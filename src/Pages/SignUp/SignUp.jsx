import { Link } from "react-router-dom";

const SignUp = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };
    console.log(data);
  };
  return (
    <div>
      <div className="lg:w-4/5 w-[95%] border rounded-lg  bg-slate-200 mx-auto mt-20 py-20 px-10">
        <h2 className="text-4xl font-bold mb-5">Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <label className="form-control w-full my-4">
            <div className="label">
              <span className="label-text text-xl text-gray-600">
                Your Name
              </span>
            </div>
            <input
              type="text"
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
          <p>
            Already have an account
            <Link to="/signup" className="text-warning mx-1">
              login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
