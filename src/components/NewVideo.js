import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
import VideoRecorder from 'react-video-recorder'
import { saveVideoAsync } from '../redux/video/action'
class NewVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            video: {}
        };
    }
  
    onStartRecording = (e) => {
        console.log(e);
    }
    onStopRecording = (e) => {
        console.log(e);
    }
    onRecordingComplete = (e) => {
        console.log(e);
        this.props.saveVideo({ id: 5, name: "Video 5", url: "https://www.youtube.com/embed/uC9qU3X1JgM" })
    }
    onRecordError = (e) => {
        console.log(e);
    }
    record = () => {

    }
    render() {
        return (
            <Fragment>
                <div className="addNew">
                    <button className="btn btn-new-video" onClick={this.record}> Record </button>
                </div>
                <VideoRecorder
                    onStartRecording={this.onStartRecording}
                    onStopRecording={this.onStopRecording}
                    onRecordingComplete={this.onRecordingComplete}
                    onError={this.onRecordError}
                />
            </Fragment>

        );
    }
}

// export default NewVideo;
const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => {
    // return null;
    return {
        saveVideo: video => dispatch(saveVideoAsync(video))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewVideo);