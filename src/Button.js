import React, { Component } from 'react';

class Button extends Component {
    render() {
        const { buttonText, handleClick } = this.props;
        return (
            <button className="button" onClick={handleClick}>
                {buttonText}
            </button>
        );
    }
}

export default Button;