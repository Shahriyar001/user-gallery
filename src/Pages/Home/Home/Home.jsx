const Home = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const social = event.target.social.value;
    const file = event.target.file.value;
    console.log(name, social, file);
  };

  return (
    <div>
      <div></div>
      <div className="lg:w-4/5 w-[95%] border rounded-lg  bg-slate-200 mx-auto mt-20 py-20 px-10">
        <h2 className="text-4xl font-bold mb-5">User Submission form</h2>
        <form onSubmit={handleSubmit}>
          <label className="form-control w-full my-4">
            <div className="label">
              <span className="label-text text-xl text-gray-600">Name:</span>
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
              <span className="label-text text-xl text-gray-600">
                Social Media Handle:
              </span>
            </div>
            <input
              type="text"
              name="social"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
          </label>
          <label className="form-control w-full my-4">
            <div className="label">
              <span className="label-text text-xl text-gray-600">
                Upload Images:
              </span>
            </div>
            <input
              type="file"
              name="file"
              placeholder="Type here"
              className="file-input w-full "
            />
          </label>
          <button
            type="submit"
            className="btn btn-primary  text-white px-5 py-2 my-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
