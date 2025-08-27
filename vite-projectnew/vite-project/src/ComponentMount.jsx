import React, { useState, useEffect } from "react";

const ComponentMount = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect runs after the component mounts
  useEffect(() => {
    // Fetch data from an API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data); // update state with API data
        setLoading(false); // stop loading
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []); // empty dependency array = runs only once on mount

  return (
    <div>
      <h2>User List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.email})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ComponentMount;
