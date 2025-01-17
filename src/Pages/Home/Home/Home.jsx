import toast, { Toaster } from "react-hot-toast";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY; // Replace with your ImgBB API key
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Home = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    const images = form.image.files; // Get all selected files
    if (!images.length) {
      toast.error("Please upload at least one image.");
      return;
    }

    try {
      // Upload all images to ImgBB
      const uploadedImages = [];
      for (const image of images) {
        const formData = new FormData();
        formData.append("image", image);

        const imgRes = await fetch(image_hosting_api, {
          method: "POST",
          body: formData,
        });

        const imgData = await imgRes.json();
        if (imgData.success) {
          uploadedImages.push(imgData.data.url); // Collect uploaded image URLs
        } else {
          throw new Error("Failed to upload an image.");
        }
      }

      // Prepare data for the backend
      const data = {
        name: form.name.value,
        social: form.social.value,
        images: uploadedImages, // Store all image URLs in an array
      };

      // Send data to your backend
      const userRes = await fetch(
        "https://gallery-server-nu.vercel.app/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const userData = await userRes.json();
      if (userRes.ok) {
        toast.success("User added successfully!");
        form.reset(); // Clear the form
      } else {
        toast.error(userData.message || "Failed to add user.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <Toaster />
      <div className="lg:w-4/5 w-[95%] border rounded-lg bg-slate-200 mx-auto mt-20 py-20 px-10">
        <h2 className="text-4xl font-bold mb-5">User Submission Form</h2>
        <form onSubmit={handleSubmit}>
          <label className="form-control w-full my-4">
            <div className="label">
              <span className="label-text text-xl text-gray-600">Name:</span>
            </div>
            <input
              type="text"
              name="name"
              placeholder="Type here"
              className="input input-bordered w-full"
              required
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
              className="input input-bordered w-full"
              required
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
              name="image"
              className="file-input w-full"
              multiple // Allow multiple file uploads
              required
            />
          </label>
          <button
            type="submit"
            className="btn btn-primary text-white px-5 py-2 my-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
