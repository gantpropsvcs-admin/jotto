import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Congrats extends Component {
    propTypes = {
        success: PropTypes.bool.isRequired,
    };

    render() {
        if (this.props.success) {
            return (
                <div
                    data-test="component-congrats"
                    className="alert alert-success"
                >
                    <span data-test="congrats-message">
                        You guessed the word!
                    </span>
                </div>
            );
        } else {
            return <div data-test="component-congrats" />;
        }
    }
}

export default Congrats;
