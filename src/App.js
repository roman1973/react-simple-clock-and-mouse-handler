import React, { Component } from 'react';
import './App.css';

class App extends Component {
      constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.state = {data: new Date().toLocaleTimeString(),x: 0, y: 0};

    }
    componentDidMount() {
        this.timerID = setInterval(()=> {
            this.setState({ data: new Date().toLocaleTimeString()});
        }, 1000);
            }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    handleMouseMove(event) {
        this.setState({
            x: event.clientX,
            y: event.clientY
        });
    }
  render() {
    return (
        <div className="zz" onMouseMove={this.handleMouseMove}>
           <div>
               <h1>Hello, world!</h1>
               <h2>It is {this.state.data}</h2>
           </div>
            <h1>Move the mouse around!</h1>
            <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
      </div>

        );

    };

}

export default App;

