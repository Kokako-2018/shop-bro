import React from 'react'
import Sound from 'react-sound'

export default class CompletedButton extends React.Component {

    render() {
        return <div className="column is-centered">
          <div className="button is-large is-primary is-rounded is-centered">
          <a className="playbutton" onClick={this.props.startPlaying}>
                <span className="icon is-large">
                    <i className="fas fa-check"></i>
                </span>
                <span>Shop Complete!</span>
                {this.props.playing && <Sound url="sounds/button-sound.mp3" playStatus={Sound.status.PLAYING} playFromposition={0.1} /> }
          </a> 
          </div>
        </div>
    }

}