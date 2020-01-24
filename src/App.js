import React, { Component } from 'react';
import './App.css';

import GuessedWords from './Components/GuessedWords';
import Congrats from './Components/Congrats';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    render() {
        return (
            <div className="container">
                <h3>Jotto</h3>
                <Congrats success={true} />
                <GuessedWords
                    guessedWords={[
                        { guessedWord: 'train', letterMatchCount: 3 },
                    ]}
                />
            </div>
        );
    }
}

export default App;
