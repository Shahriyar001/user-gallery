import { useEffect, useState } from "react";

const UsersData = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  console.log(users);
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div></div>
      <div className="w-8/10  m-12">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className="text-xl font-bold">Pic</th>
                <th className="text-xl font-bold">Name</th>
                <th className="text-xl font-bold">Social handler</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users?.map((user, index) => (
                <tr key={index}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={user?.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="font-bold">{user?.name}</div>
                  </td>
                  <td>{user?.social}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UsersData;
