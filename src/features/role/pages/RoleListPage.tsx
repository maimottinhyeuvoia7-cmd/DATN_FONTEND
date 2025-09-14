// import React from "react";
import MainLayout from "../../../layouts/MainLayout";
import RoleForm from "../components/RoleForm";
import RoleList from "../components/RoleList";

export default function RoleListPage() {
  return (
    <MainLayout>
      <RoleForm />
      <RoleList />
    </MainLayout>
  );
}