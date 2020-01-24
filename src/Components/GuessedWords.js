import React, { Component } from 'react';
import PropTypes from 'prop-types';

class GuessedWords extends Component {
    contents = null;

    propTypes = {
        guessedWords: PropTypes.arrayOf(
            PropTypes.shape({
                guessWord: PropTypes.string.isRequired,
                letterMatchCount: PropTypes.number.isRequired,
            }).isRequired
        ),
    };

    render() {
        if (this.props.guessedWords.length === 0) {
            this.contents = (
                <span data-test="guess-instructions">
                    Try to guess the secret word!
                </span>
            );
        }
        return <div data-test="component-guess-words">{this.contents}</div>;
    }
}

export default GuessedWords;
