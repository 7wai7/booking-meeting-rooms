import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <main className="page-content">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
