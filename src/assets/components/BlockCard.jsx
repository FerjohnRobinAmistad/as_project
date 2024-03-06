import React from 'react'
import PropTypes from 'prop-types';
import '../scss/blockcard.scss';

BlockCard.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    image: PropTypes.string
};

export default function BlockCard({ title, image, content }) {

    return (
        <a href="https://nution.persol-career.co.jp/" className='block-card'>
            <div className='image-container'>
                {image && <img src={image} alt={title} className="card-image" />}
            </div>
            <div className='container'>
                <h3 className='title noto-san'>{title}</h3>
                <p dangerouslySetInnerHTML={{ __html: content }} className='content'></p>
            </div>
        </a>
    )
}
