import { Await, NavLink, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import albumstyles from "./albumstyles.module.css";
import mainstyles from "../../mainstyles.module.css";

export const loader = async ({ params: { id } }) => {
  const album = await fetch(
    "https://jsonplaceholder.typicode.com/albums/" + id
  ).then((response) => {
    if (!response.ok) throw new Error("Failed to fetch");
    else return response.json();
  });

  const photosPromise = fetch(
    `https://jsonplaceholder.typicode.com/albums/${id}/photos`
  ).then((response) => {
    if (!response.ok) throw new Error("Failed to fetch");
    else return response.json();
  });

  const author = await fetch(
    `https://jsonplaceholder.typicode.com/users/${album.userId}`
  ).then((response) => {
    if (!response.ok) throw new Error("Failed to fetch");
    else return response.json();
  });

  return { album, photosPromise, author };
};

export default function Album() {
  const { album, photosPromise, author } = useLoaderData();
  return (
    <div>
      <div className={mainstyles.info}>
        <div className={mainstyles.name}>{album.title}</div>
        <div>
          Created by:
          <NavLink className={albumstyles.userlink} to={`/users/${author.id}`}>
            {author.name}
          </NavLink>
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={photosPromise}>
          {(albumphotos) => {
            return (
              <div className={albumstyles.albumwrapper}>
                {albumphotos.map((photo) => (
                  <img
                    className={albumstyles.albumimage}
                    key={photo.id}
                    src={photo.url}
                  ></img>
                ))}
              </div>
            );
          }}
        </Await>
      </Suspense>
    </div>
  );
}
