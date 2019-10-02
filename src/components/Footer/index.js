import React from 'react';

const Footer = ({ myList }) => {
  return (
    <div className="footer">
      <span>Movies in My List:</span>
      {myList.map((item, index) => {
        return (
          <div key={item.id} className="title">
            {item.title}
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
