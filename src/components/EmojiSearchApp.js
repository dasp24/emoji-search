import React from 'react';

import EmojiList from './EmojiList';
import EmojiSearch from './EmojiSearch';
import emojiData from '../emojiList.json';

//here must be write  filter function

// this looks at keywords and only shows if .includes
class EmojiSearchApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword:''
        };
    }

    updateKeyword(keyword) {
        this.setState({ keyword });
    }

    render () {
        return (
            <div>
                <h1>Emoji Search App</h1>
                <EmojiSearch updateKeyword={this.updateKeyword.bind(this)}/>
                <EmojiList data={emojiData} searchOnKeyword={this.state.keyword}/>
            </div>
        );
    }
}

export default EmojiSearchApp;