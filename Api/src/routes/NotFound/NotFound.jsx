import { NavLink } from "react-router-dom";
import notfoundstyles from "./notfoundstyles.module.css";
export default function NotFound() {
  return (
    <div className={notfoundstyles.wrapper}>
      <div className={notfoundstyles.text}>404</div>
      <div className={notfoundstyles.text}>Page not found</div>
      <NavLink to="/">Go to Users</NavLink>
    </div>
  );
}
