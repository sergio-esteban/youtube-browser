import React from 'react';
import Spinner from './Spinner'

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div style={{ marginTop: '50%' }}><Spinner /></div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            <div className='ui embed'>
                <iframe src={videoSrc} title={video.title} />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
}

export default VideoDetail;