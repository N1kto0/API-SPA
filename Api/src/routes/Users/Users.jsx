import { useLoaderData } from "react-router-dom";
import { NavLink } from "react-router-dom";
import mainstyles from "../../mainstyles.module.css";

export const loader = async () => {
  const users = await fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => {
      if (!response.ok) throw new Error("Failed to fetch");
      else return response.json();
    }
  );
  return { users };
};

export default function Users({ onUserClick }) {
  const { users } = useLoaderData();
  return (
    <div className={mainstyles.wrapper}>
      {users.map((user) => (
        <NavLink
          className={mainstyles.link}
          key={user.id}
          to={`/users/${user.id}`}
        >
          {user.name}
        </NavLink>
      ))}
    </div>
  );
}
