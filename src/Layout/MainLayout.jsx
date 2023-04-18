import React from "react";
import NavBar from "../components/NavBar/NavBar";

function MainLayout({ children }) {
  return (
    <section>
      <NavBar />
      <div>{children}</div>
    </section>
  );
}

export default MainLayout;
