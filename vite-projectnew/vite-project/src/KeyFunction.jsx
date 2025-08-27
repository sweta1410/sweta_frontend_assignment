
import React from "react";

const users = [
  { id: "u_1a2b", name: "Sweta",  email: "sweta@gmail.com" },
  { id: "u_3c4d", name: "Kishan",   email: "kishan@gmail.com"  },
  { id: "u_5e6f", name: "Ankita",  email: "ankita@gmail.com" },
];

export default function KeyFunction() {
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
