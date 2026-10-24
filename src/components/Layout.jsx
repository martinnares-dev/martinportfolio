import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Background from "./Background";

function Layout() {
  return (
    <>
      <Background />
      <Navbar />
      <main className="container">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;