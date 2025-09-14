import { useEffect } from "react";
import { getRoles } from "../roleService";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { setRoles } from "../roleSlice";
import type { RootState } from "../../../app/store";

type Role = {
  id: string | number;
  name: string;
};

export default function RoleList() {
  const dispatch = useAppDispatch();
  const roles = useAppSelector((state: RootState) => (state.role as any).roles) as Role[];

  useEffect(() => {
    getRoles().then(res => dispatch(setRoles(res.data)));
  }, [dispatch]);

  return (
    <ul>
      {roles.map(role => (
        <li key={role.id}>{role.name}</li>
      ))}
    </ul>
  );
}