// @flow

import React from 'react';
import Header from './Header';

const Details = (props: { show: Show }) => {
  const { title, description, year, poster, trailer } = props.show;
  return (
    <div className="details">
      <Header />
      <section>
        <h1>{title}</h1>
        <h2>({year})</h2>
        <img src={`/public/img/posters/${poster}`} alt={`Poster for ${title}`} />
        <p>{description}</p>
      </section>
      <div>
        <iframe
          id="ytplayer"
          type="text/html"
          width="640"
          height="360"
          src={`http://www.youtube.com/embed/${trailer}?autoplay=0;showinfo=0`}
          title={`Trailer for ${title}`}
          frameBorder="0"
        />
      </div>
    </div>
  );
};

export default Details;
