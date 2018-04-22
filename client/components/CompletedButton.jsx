import React from 'react'
import Sound from 'react-sound'

export default class CompletedButton extends React.Component {

    render() {
        return <div>
          <div className="button">
          <a class="button is-success is-large is-mobile" className="playbutton" onClick={this.props.startPlaying}>
                <span class="icon is-large">
                    <i class="fas fa-check"></i>
                </span>
                <span>Shop Complete!</span>
                {this.props.playing && <Sound url="sounds/button-sound.mp3" playStatus={Sound.status.PLAYING} playFromposition={0.1} /> }
          </a> 
          </div>
        </div>
    }

}