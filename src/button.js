import React, { Component } from 'react';

class Button extends Component {
    render() {
        const { buttonText } = this.props;
        return (
            <button class='button'>
                {buttonText}
            </button>
        );
    }
}

export default Button;