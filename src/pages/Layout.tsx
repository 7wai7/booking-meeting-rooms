import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

function Layout() {
  return (
    <>
      <SideBar />
      <main className="page-content">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
