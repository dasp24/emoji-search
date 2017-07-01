import React from 'react';


class EmojiList extends React.Component {
     filterTheSmileys() {
       return this.props.data.filter((e) => {
            return (e.keywords.includes(this.props.searchOnKeyword));
        });
    }

    render() {
       const renderEmoji = (e) => (
            
                <p>{e.symbol}</p> 
    
        );
    

        return (
            <div>
                <ul>{this.filterTheSmileys().map(renderEmoji)}</ul>
                </div>
        );
    }
}

export default EmojiList;