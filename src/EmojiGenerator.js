import React, { useState, Component } from 'react';

const emojiSet = ['🎃', '👻', '🧟', '😱', '👽', '💀'];

const EmojiGenerator = () => {
    const [emoji, setEmoji] = useState(emojiSet[0]);


    const generateEmoji = () => {
        let randomIndex = Math.floor(Math.random() * emojiSet.length);
        let randomEmoji = emojiSet[randomIndex];
        setEmoji(randomEmoji);
    }

    return (
        <div>
            <span className="emoji" role="img" aria-label="emoji">
                {emoji}
            </span>
            <button className="medium-btn" onClick={generateEmoji}>
                Generate
        </button>
        </div>
    )

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