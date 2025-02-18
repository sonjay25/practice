import React from 'react'

function AnimeList({anime}) {
  return (
    <div className="grid grid-cols-5 bg-gradient-to-r from-green-400 via-purple-500 to-red-400 ">
    {anime.map((value) => {
      return (
        <div key={value.mal_id}>
          <img src={value.images.jpg.image_url} alt={value.title} />
          <a className="hover:font-mono text-black" href={value.trailer.url}>
            {value.trailer.url ? (
              value.trailer.url
            ) : (
              <p className="capitalize font-mono hover:font-mono">
                walang trailer sa yt
              </p>
            )}
          </a>
        </div>
      );
    })}
  </div>
  )
}

export default AnimeList