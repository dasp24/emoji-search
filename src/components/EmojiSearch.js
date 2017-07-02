import React from 'react';

class EmojiSearch extends React.Component {
    constructor() {
        super();
        this.style = {
           position: 'fixed',
           top: '50%',
           left: '50%',
           margintop: '-50px',
           marginleft: '-100px'
        };
    }

    onInput() {
        const value = this.inputRef.value;
        this.props.updateKeyword(value);
    }

    render() {
        return (
          <input ref={ref => this.inputRef = ref} type="text" name="search" style={this.style} placeholder="Search.." onInput={this.onInput.bind(this)}/>
        );
    }
}

export default EmojiSearch;