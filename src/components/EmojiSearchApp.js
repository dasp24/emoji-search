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
                    border: '3px solid green',
                    shadow: '3px solid green',
                    padding: '5px',
                    display: 'inline-block'
                };
        }

    updateKeyword(keyword) {
        this.setState({ keyword });
    }

    render () {
        return (
            <div>
                <h1 style={this.style}>FIND YOU'RE FAVOURITE</h1>
                <EmojiSearch updateKeyword={this.updateKeyword.bind(this)}/>
                <EmojiList data={emojiData} searchOnKeyword={this.state.keyword}/>
            </div>
        );
    }
}

export default EmojiSearchApp;