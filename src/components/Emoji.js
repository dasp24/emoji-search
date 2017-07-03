import React from 'react';


class Emoji extends React.Component {
    // option for grid or list
    // emoji banner on top
    constructor() {
        super();
        this.state = {
            fontSize: 30
        };
        this.style = {
            fontSize: this.state.fontSize + 'px',
            border:'1px solid black', 
            display: 'inline-block',
            padding: '5px',
            width: '95%'
        };
    }

    makeItBig() { 
            clearInterval(this.timer);
            this.setState({ fontSize: 50 });
    }
    
    makeItSmall() {
        clearInterval(this.timer);
        this.setState({ fontSize: 30 });
    }

    render() {
        return (
            <div style={{textAlign:'center'}}>
                <p style={this.style}>
                    <a style={{float:'left'}}>{this.props.symbol}</a>
                    <a style={{textAlign:'center'}}>{this.props.title}</a>
                    <a style={{float:'right'}}>{this.props.symbol}</a>
                </p>
            </div>
        );
    }
}

export default Emoji;

// onMouseOver={this.makeItBig.bind(this)} onMouseOut={this.makeItSmall.bind(this)}>