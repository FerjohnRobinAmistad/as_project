import React from 'react'
import "../scss/achievecardsmall.scss"

export default function AchieveCardSmall({ image, content, date, text }) {
    return (
        <>
            <div className="achieve-cardsmall">
                <div className='image-container'>
                    {image && <img src={image} alt={text} className="card-image" />}
                </div>
                <div className="content-container">
                    <div className="content">
                        <h3 className='noto-san'>{content}</h3>
                    </div>
                    <div className='date-text'>
                        <p>{date}</p>
                        <div className="box-container">
                            <div className="box">
                                <span className='noto-san'>{text}</span>
                            </div>
                            <div className="box">
                                <span className='noto-san'>{text}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="achieve-cardsmallsp">
                <div className="container">
                    <div className='image-container'>
                        {image && <img src={image} alt={text} className="card-image" />}
                    </div>
                    <div className="content-container">
                        <div className="content">
                            <h3 className='noto-san'>{content}</h3>
                        </div>
                    </div>
                </div>
                <div className='date-text'>
                    <p>{date}</p>
                    <div className="box-container">
                        <div className="box">
                            <span className='noto-san'>{text}</span>
                        </div>
                        <div className="box">
                            <span className='noto-san'>{text}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
