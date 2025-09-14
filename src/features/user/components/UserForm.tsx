import React, { useState } from "react";
import { createUser, getUsers } from "../userService";
import { useAppDispatch } from "../../../app/hooks";
import { setUsers } from "../userSlice";

export default function UserForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createUser({ username, password });
    setUsername("");
    setPassword("");
    // Reload user list
    getUsers().then(res => dispatch(setUsers(res.data)));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button type="submit">Tạo user</button>
    </form>
  );
}