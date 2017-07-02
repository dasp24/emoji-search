import React from 'react';


class Emoji extends React.Component {
    constructor() {
        super();
        this.state = {
            fontSize: 30
        };
        this.style = {
            border:'1px solid black', 
            display: 'inline-block',
            padding: '5px'
        };
    }

    makeItBig() {
        this.timer = setInterval(() => {
            if (this.state.fontSize < 80) 
            this.setState({ fontSize: this.state.fontSize + 1 }
            
        )}, 100);
        // the imagine and make it bigger
    }
    
    makeItSmall() {
        clearInterval(this.timer);
        this.setState({ fontSize: 30 });
    }

    render() {
        return (
            <div>
            <p style={{fontSize: this.state.fontSize + 'px'}} onMouseOver={this.makeItBig.bind(this)} onMouseOut={this.makeItSmall.bind(this)}>{this.props.symbol}</p>
            <p style={this.style}>{this.props.keywords}</p>
            </div>
        );
    }
}

export default Emoji;