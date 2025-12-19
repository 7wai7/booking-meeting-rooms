import { Link } from "react-router-dom";
import css from "../styles/SideBar.module.css";
import { useAuth } from "../hooks/useAuth";

export default function SideBar() {
  const { user, logout } = useAuth();

  return (
    <section className={css.sidebar}>
      <nav>
        <Link to={"/rooms"}>Meeting rooms</Link>
        <Link to={"/bookings"}>Bookings</Link>
      </nav>
      <hr />
      <p className={css.profile_top}>Profile</p>
      <div>
        <p className={css.username}>{user!.name}</p>
        <p className={css.email}>{user!.email}</p>
      </div>
      <button className={css.logout_btn} onClick={logout}>Logout</button>
    </section>
  );
}
