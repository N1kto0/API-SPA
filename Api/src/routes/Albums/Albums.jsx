import { useLoaderData, NavLink } from "react-router-dom";
import mainstyles from "../../mainstyles.module.css";

export const loader = async () => {
  const albums = await fetch(
    "https://jsonplaceholder.typicode.com/albums"
  ).then((response) => {
    if (!response.ok) throw new Error("Failed to fetch");
    else return response.json();
  });
  return { albums };
};
export default function Albums() {
  const { albums } = useLoaderData();

  return (
    <div className={mainstyles.wrapper}>
      {albums.map((album) => (
        <NavLink
          className={mainstyles.link}
          key={album.id}
          to={`/albums/${album.id}`}
        >
          {album.title}
        </NavLink>
      ))}
    </div>
  );
}
