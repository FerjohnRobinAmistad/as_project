import React from 'react'
import PropTypes from 'prop-types';
import Emoji from "../images/branchcard/sad-face.png"
import "../scss/reviewcard.scss"

ReviewCard.propTypes = {
  content: PropTypes.string.isRequired,
};

export default function ReviewCard({ content }) {
  return (
    <div className='card-review'>
      <div className='review-emoji'>
        <img src={Emoji} alt='' />
      </div>
      <div className='review-content'>
        <p dangerouslySetInnerHTML={{ __html: content }}></p>
      </div>
    </div>
  )
}
