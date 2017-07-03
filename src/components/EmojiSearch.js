import React from 'react';

class EmojiSearch extends React.Component {
    constructor() {
        super();
        this.style = {
            
           width:'95%',
           height:'40'
        };
    }

    onInput() {
        const value = this.inputRef.value;
        this.props.updateKeyword(value);
    }

    render() {
        return (
          <input ref={ref => this.inputRef = ref} type="text" name="search" style={this.style} placeholder="Start typing..." onInput={this.onInput.bind(this)}/>
        );
    }
}

export default EmojiSearch;