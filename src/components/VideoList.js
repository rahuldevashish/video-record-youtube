import React, { Component, Fragment } from 'react'
import './Video.css'
import { connect } from 'react-redux';
import NewVideo from './NewVideo';
import { fetchVideosAsync } from '../redux/video/action'
class VideoList extends React.Component {
    state = { videos: [] }
    componentDidMount() {
        // this.props.fetchVideos();
        let videosList = [{ id: 1, name: "Video 1", url: "https://www.youtube.com/embed/QPiFVXsdvXs" },
        { id: 2, name: "Video 2", url: "https://www.youtube.com/embed/uC9qU3X1JgM" },
        { id: 3, name: "Video 3", url: "https://www.youtube.com/embed/uC9qU3X1JgM" },
        { id: 4, name: "Video 3", url: "https://www.youtube.com/embed/uC9qU3X1JgM" }]
        this.setState({ videos: videosList });
    }
    render() {
        return (
            <Fragment>
                <div id="video-main">
                    <div class="card-deck video-list">
                    {this.state.videos.map((video) => {
                        return (
                            <div className="card video-content" key={video.id} >
                                <div className="card-img-top">
                                    <iframe src={video.url}
                                        frameBorder='0'
                                        allow='autoplay; encrypted-media'
                                        allowFullScreen
                                        title='video'
                                        width= '450'
                                        height= '250'
                                    />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title video-title">{video.title}</h5>
                                </div>
                            </div>
                        )
                    })}
                    </div>
                    <NewVideo/>
                </div>
            </Fragment>
        );
    }
}


// export default VideoList;
const mapStateToProps = (store) => {
    return {
        videos: store.videos.videos
    }
}

const mapDispatchToProps = {
    fetchVideos: fetchVideosAsync
}


export default connect(mapStateToProps, mapDispatchToProps)(VideoList);