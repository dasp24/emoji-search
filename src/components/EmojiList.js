import React from 'react';

import Emoji from './Emoji';

class EmojiList extends React.Component {
     filterTheSmileys() {
       return this.props.data.filter((e) => {
            return (e.keywords.includes(this.props.searchOnKeyword));
        });
    }

    render() {
        return (
            <div>
                <ul>{this.filterTheSmileys().map((e) => <Emoji symbol={e.symbol} title={e.title} keywords={e.keywords}/>)}</ul>
            </div>
        );
    }
}

export default EmojiList;