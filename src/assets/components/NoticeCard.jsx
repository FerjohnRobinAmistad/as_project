import React from 'react'
import "../scss/noticecard.scss"

export default function NoticeCard({ image, text, content }) {
    return (
        <div className='notice-card'>
            <div className='card-container'>
                {image && <img src={image} alt={text} className="card-image" />}
            </div>
            <div className='box-container'>
                <div className='box'>
                    <span>{text}</span>
                </div>
                <div className='box'>
                    <span className='noto-sans'>{text}</span>
                </div>
            </div>
            <p className='content noto-sans'>{content}</p>
        </div>
    )
}
