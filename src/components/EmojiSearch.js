import React from 'react';

class EmojiSearch extends React.Component {
    onInput() {
        const value = this.inputRef.value;
        this.props.updateKeyword(value);
    }

    render() {
        return (
          <input ref={ref => this.inputRef = ref} type="text" name="search" placeholder="Search.." onInput={this.onInput.bind(this)}/>
        );
    }
}

export default EmojiSearch;