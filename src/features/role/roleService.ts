import axios from "axios";

export const getRoles = () => axios.get("/api/roles");
export const createRole = (data: any) => axios.post("/api/roles", data);