import React, { Component } from 'react';

const emojiSet = ['🎃', '👻', '🧟', '😱', '👽', '💀'];

class EmojiGenerator extends Component {
    state = {
        emoji: emojiSet[0]
    }

    generateEmoji = () => {
        let randomIndex = Math.floor(Math.random() * emojiSet.length);
        let randomEmoji = emojiSet[randomIndex];

        this.setState({
            emoji: randomEmoji
        })
    }

    render() {
        return (
            <div>
                <span className="emoji" role="img" aria-label="emoji">
                    {this.state.emoji}
                </span>
                <button className="medium-btn" onClick={this.generateEmoji}>
                    Generate
        </button>
            </div>
        )

    }
}

class App extends Component {
    render() {
        return (
            <div>
                <EmojiGenerator />
            </div>
        );
    }
}

export default App;