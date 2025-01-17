import { useEffect, useState } from "react";

const UsersData = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://gallery-server-nu.vercel.app/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>User Submissions</h2>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th className="text-xl font-bold">Images</th>
              <th className="text-xl font-bold">Name</th>
              <th className="text-xl font-bold">Social Handle</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={index}>
                <td>
                  <div className="flex gap-2">
                    {user?.images?.map((image, idx) => (
                      <a
                        key={idx}
                        href={image} // Link to the full image
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={image}
                          alt={`User ${user.name}`}
                          className="h-12 w-12 object-cover rounded border hover:shadow-lg" // Thumbnail
                        />
                      </a>
                    ))}
                  </div>
                </td>
                <td>{user.name}</td>
                <td>
                  <a
                    href={`https://www.socialmedia.com/${user.social}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 underline"
                  >
                    @{user.social}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersData;
