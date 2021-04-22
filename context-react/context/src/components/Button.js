import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
    renderColor(color) {
        return (
        <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
                {(value) => value === 'english' ? 'Submit' : 'Voorleggen'}
            </LanguageContext.Consumer>
        </button> );
    }

    render() {
        return (
            <ColorContext.Consumer>
                {(color) => this.renderColor(color)}
            </ColorContext.Consumer>
        );  
    }
}

export default Button;