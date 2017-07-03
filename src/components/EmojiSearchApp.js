import React from 'react';

import EmojiList from './EmojiList';
import EmojiSearch from './EmojiSearch';
import emojiData from '../emojiList.json';

class EmojiSearchApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword:''
        };
        this.style = {
                    left: '500px',
                    width: '90%',
                    textAlign: 'center'
                };
        }

    updateKeyword(keyword) {
        this.setState({ keyword });
    }

    render () {
        return (
            <div>
                <h1 style={this.style}>EMOJI SEARCH APP</h1>
                <img src = {require('./emojiBanner.jpg')} width="100%" height="200"/>
                <EmojiSearch updateKeyword={this.updateKeyword.bind(this)}/>
                <EmojiList data={emojiData} searchOnKeyword={this.state.keyword}/>
            </div>
        );
    }
}

export default EmojiSearchApp;