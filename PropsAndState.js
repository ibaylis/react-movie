import React, { Component } from 'react';

class PropsAndState extends Component {
    render() {
        return (
            <Alpha />
        )
    }
}

export default PropsAndState;

// Alpha Class
class Alpha extends Component {
    state = {
        alphaValue: 'Oh yes, data from Alpha!',
        counter: 1
    }

    clickButton = () => {
        console.log("click");
        console.log(this.state.counter);

        let copyCounter = this.state.counter;
        copyCounter += 1;

        this.setState({
            counter: copyCounter
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.clickButton}>Wow! A button</button>
                <Beta fromAlpha={this.state.alphaValue} />
            </div>
        )
    }
}

// Beta Class
class Beta extends Component {
    state = {
        alphaValue: this.props.fromAlpha,
        betaValue: 'This is data from Beta'
    }

    render() {
        return (
            <div>
                <p>This is Beta showing a prop sent down from Alfa that is: <br>{this.props.fromAlpha}</br></p>
                <p>This is Beta showing data from state that is: <br>{this.state.betaValue}</br></p>
            </div>
        )
    }
}
