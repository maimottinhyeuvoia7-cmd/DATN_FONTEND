import React, { useState } from "react";
import { createRole, getRoles } from "../roleService";
import { useAppDispatch } from "../../../app/hooks";
import { setRoles } from "../roleSlice";

export default function RoleForm() {
  const [name, setName] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createRole({ name });
    setName("");
    // Reload role list
    getRoles().then(res => dispatch(setRoles(res.data)));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Role name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button type="submit">Tạo role</button>
    </form>
  );
}