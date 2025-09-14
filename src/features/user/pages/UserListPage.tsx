// import React from "react";
import MainLayout from "../../../layouts/MainLayout";
import UserForm from "../components/UserForm";
import UserList from "../components/UserList";

export default function UserListPage() {
  return (
    <MainLayout>
      <UserForm />
      <UserList />
    </MainLayout>
  );
}