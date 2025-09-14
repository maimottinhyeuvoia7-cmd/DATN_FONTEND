import axios from "axios";

export const getUsers = () => axios.get("/api/users");
export const createUser = (data: any) => axios.post("/api/users", data);