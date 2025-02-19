import React, { useEffect, useState } from "react";

function Home() {
  const [anime, setAnime] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    async function myfetch(params) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const fetchData = fetch(params);
          fetchData
            .then((res) => {
              if (!res.ok) {
                throw new Error(`fetch status is : ${res.status}`);
              }
              return res.json();
            })
            .then((res) => {
              resolve(res.data);
            })
            .catch((err) => {
              reject(err.message);
            });
        }, 2000);
      });
    }
    myfetch('https://api.jikan.moe/v4/anime')
      .then((res) => setAnime(res))
      .catch((err) => {
        setError(err);
        console.log(err);
      });
  }, []);
  return (
    <div>
      {error ? (
        <p className="text-red-400">{error}</p>
      ) : anime ? (
        <p className="bg-gradient-to-r from-purple-500 via-green-400 to-sky-400">{JSON.stringify(anime)}</p>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}

export default Home;
