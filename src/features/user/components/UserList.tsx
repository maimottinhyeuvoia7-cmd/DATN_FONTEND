import { useEffect } from "react";
import { getUsers } from "../userService";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { setUsers } from "../userSlice";

export default function UserList() {
  const dispatch = useAppDispatch();
  const users = useAppSelector(state => state.user.users);

  useEffect(() => {
    getUsers().then(res => dispatch(setUsers(res.data)));
  }, [dispatch]);

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{user.username}</li>
      ))}
    </ul>
  );
}