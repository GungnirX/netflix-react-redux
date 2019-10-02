import React from 'react';
import Button from '../Button';

const MovieList = ({ data, onClick, category, buttonText }) => {
  return (
    <div className={`list-container ${category}`}>
      <h2>{category}</h2>
      <div className="list">
        {data.map((item, index) => {
          return (
            <div className="movie" key={item.id}>
              <img src={item.img} alt="Movie Poster" />
              <div>
                <Button onClick={() => onClick(item.id)} text={buttonText} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
