import React, { Component } from 'react';

class Congrats extends Component {
    render() {
        if (this.props.success) {
            return (
                <div data-test="component-congrats">
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
