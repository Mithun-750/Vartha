import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './NewsItem.css'

export default class NewsItem extends Component {
    getTimeAgo(timeString) {
        const currentTime = new Date();
        const time = new Date(timeString);

        const timeDifference = currentTime.getTime() - time.getTime();
        const minutes = Math.floor(timeDifference / (1000 * 60));
        const hours = Math.floor(timeDifference / (1000 * 60 * 60));
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (days > 0) {
            return `${days} day${days > 1 ? 's' : ''} ago`;
        } else if (hours > 0) {
            return `${hours} hour${hours > 1 ? 's' : ''} ago`;
        } else if (minutes > 0) {
            return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
        } else {
            return 'Just now';
        }
    }

    render() {
        // eslint-disable-next-line react/prop-types
        let { image, title, description, url, theme, publishedAt, source } = this.props
        return (
            <>
                <div className={`NewsItem ${theme}`}>
                    <img src={image} alt="" className={`ItemImage`} />
                    <h3 className={`ItemTitle ${theme}`}>{title}</h3>
                    <p>{description}</p>
                    <a href={url} target="_blank" rel="noopener noreferrer">View full article<span className="material-symbols-outlined">open_in_new</span></a>
                    <h6 className={`daysAgo ${theme}`}>Published {this.getTimeAgo(publishedAt)} at <a href={source.url} target="_blank" rel="noopener noreferrer">{source.name}</a></h6>
                </div>
            </>
        )
    }
}

