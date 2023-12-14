import { NavLink, Outlet } from "react-router-dom";
import layoutstyles from "./layoutstyles.module.css";
export default function Layout() {
  return (
    <div>
      <NavLink className={layoutstyles.link} to="/albums">
        Albums
      </NavLink>
      <NavLink className={layoutstyles.link} to="/">
        Users
      </NavLink>
      <hr />
      <main>
        <Outlet></Outlet>
      </main>
      <hr />
      <footer className={layoutstyles.footer}>
        <div>Created by: Alexey Burimskiy</div>
        <div>BSU 2023</div>
      </footer>
    </div>
  );
}
