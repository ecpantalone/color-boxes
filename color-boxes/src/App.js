import React, { Component } from 'react';
import './App.css';
import Box from './Box'

class App extends Component {

    render() {

        let listItems = []
        for(let i=0 ; i < 100; i++ ){
            listItems.push( <Box /> )
        }

        return (
            <div className="App">
                { listItems }
            </div>
        );
    }
}
export default App;

