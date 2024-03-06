import React from 'react';
import PropTypes from 'prop-types';
import "../scss/brandcard.scss"

const Card = ({ title, content, subtitle, imageUrl, weblink }) => {
  const handleClick = () => {
    window.location.href = weblink;
  };
  return (
    <div className='block-card' onClick={handleClick}>
      <div className="card">
        <div className='card-image-container'>
          {imageUrl && <img src={imageUrl} alt={title} className="card-image" />}
        </div>
        <div className="card-content noto-san">
          <h3 className='card-subtitle noto-san'>{subtitle}</h3>
          <h2 className="card-title noto-san">{title}</h2>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  imageUrl: PropTypes.string
};

export default Card;