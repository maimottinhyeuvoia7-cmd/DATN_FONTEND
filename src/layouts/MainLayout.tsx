import React from "react";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <header>Header</header>
      <main>{children}</main>
    </div>
  );
}