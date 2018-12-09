import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Stopwatch from './components/Stopwatch';
import Control from './components/Control'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnPosition: 'START',
      min2: 0,
      min1: 0,
      sec2: 0,
      sec1: 0,
      totalSecs: 0,
      timer: null
    }
    this.timer = this.timer.bind(this)
  }

  handleClick() {
    let btnPosition = this.state.btnPosition === 'START' ? (
      'STOP') : ('START')

    this.setState({
      btnPosition: btnPosition
    });

    if (this.state.timer == null) {
      let secTimer = setInterval(this.timer, 1000)
      this.setState({
        timer: secTimer
      });
    } else if (this.state.timer) {
      clearInterval(this.state.timer);
      this.setState({
        min2: 0,
        min1: 0,
        sec2: 0,
        sec1: 0,
        totalSecs: 0,
        timer: null
      })
    }
  }

  divmod(x, y) {
    let newX = x;
    let newY = y;
    newX = Math.floor(x / y);
    newY = x % y;
    return [newX, newY];
  }

  timer() {
    this.setState({
      totalSecs: this.state.totalSecs + 1
    });

    if (this.state.totalSecs >= 3600) {
      this.setState({
        totalSecs: 0
      });
      return;
    }

    let min2, min1, sec2, sec1;
    let secs = this.divmod(this.state.totalSecs, 60);
    min1 = secs[0];
    min2 = 0;
    sec1 = secs[1];
    sec2 = 0;

    while (sec1 >= 10) {
      sec2 += 1;
      sec1 -= 10;
    }

    while (min1 >= 10) {
      min2 += 1;
      min1 -= 10;
    }

    this.setState({
      min2: min2,
      min1: min1,
      sec2: sec2,
      sec1: sec1
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Stopwatch status={this.state}/>
        <Control status={this.state} onClick={() => this.handleClick()} />
      </div>
    );
  }
}

export default App;
