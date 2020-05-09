import React, {Component} from 'react';

class Box extends Component {

    state = {
        randomBkgrndColor: "#000000",
    }

    randomColorGenerator = () => {
        this.setState({
            randomBkgrndColor: "#" + Math.floor(Math.random() * 16777215).toString(16),
        });
    };

    render() {
        return (
            <div className="Box" onMouseOver={() => this.randomColorGenerator()} style={{backgroundColor: this.state.randomBkgrndColor}}/>
        );

    }
}
export default Box;
