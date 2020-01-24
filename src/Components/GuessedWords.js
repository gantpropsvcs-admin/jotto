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
        } else {
            const guessedWordsRows = this.props.guessedWords.map(
                (word, index) => (
                    <tr data-test="guessed-word" key={index}>
                        <td>{word.guessedWord}</td>
                        <td>{word.letterMatchCount}</td>
                    </tr>
                )
            );
            this.contents = (
                <div data-test="guessed-words">
                    <h3>Guessed words</h3>
                    <table className="table table-sm">
                        <thead className="thead-light">
                            <tr>
                                <th>Guess</th>
                                <th>Matching letters</th>
                            </tr>
                        </thead>
                        <tbody>{guessedWordsRows}</tbody>
                    </table>
                </div>
            );
        }
        return <div data-test="component-guess-words">{this.contents}</div>;
    }
}

export default GuessedWords;
