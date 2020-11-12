import React, { Component } from 'react';

class Button extends Component {
    render() {
        const { filter, buttonText, handleClick } = this.props;
        return (
            <button filter={filter} className="button" onClick={handleClick}>
                {buttonText}
            </button>
        );
    }
}

export default Button;