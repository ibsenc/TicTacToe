import React from 'react';
const BUTTON_DIMENSION = 100;

class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {text: this.props.text};
    }

    buttonStyle = {
        fontFamily: 'moderne sans',
        fontSize: 50,
        width: BUTTON_DIMENSION, 
        height: BUTTON_DIMENSION,
        verticalAlign: 'top',
        outline: 'none',
        border: 'solid'
    };

    onTileClick() {
        this.props.onTileClick(this.props.x, this.props.y);
    }

    componentDidUpdate(prevProps) {
        if (this.props.text !== prevProps.text) {
            this.setState(this.props);
        }
    }

    render() {
        return (
            <button 
                onClick={this.onTileClick.bind(this)}
                style={this.buttonStyle}>
                    {this.state.text}
            </button>
        );
    }
}

export default Tile;