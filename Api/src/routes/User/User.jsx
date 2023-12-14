import { NavLink, useLoaderData } from "react-router-dom";
import mainstyles from "../../mainstyles.module.css";
import userstyles from "./userstyles.module.css";

export const loader = async ({ params: { id } }) => {
  const links = [
    `https://jsonplaceholder.typicode.com/users/${id}`,
    `https://jsonplaceholder.typicode.com/users/${id}/albums`
  ];

  const responses = await Promise.all(
    links.map(
      async (link) =>
        await fetch(link).then((response) => {
          if (!response.ok) throw new Error("Failed to fetch");
          else return response.json();
        })
    )
  );

  return responses;
};

export default function User() {
  const [user, useralbums] = useLoaderData();
  return (
    <div className={mainstyles.wrapper}>
      <div className={mainstyles.info}>
        <div>Name: {user.name}</div>
        <div>Username: {user.username}</div>
        <div>Email: {user.email}</div>
        <div>Phone: {user.phone}</div>
        <div>Website: {user.website}</div>
      </div>
      <div className={userstyles.paragraph}>Albums</div>
      {
        <div>
          {useralbums.map((album) => (
            <NavLink
              className={mainstyles.link}
              key={album.id}
              to={`/albums/${album.id}`}
            >
              {album.title}
            </NavLink>
          ))}
        </div>
      }
    </div>
  );
}
