import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toggle onToggle={ (on) => alert(on)}>
          <Toggle.On> The toggle is on </Toggle.On>
          <Toggle.Off> The toggle is off </Toggle.Off>
          <Toggle.Button />
        </Toggle>
      </div>
    );
  }
}

class Toggle extends Component {
  static On = ToggleOn;
  static Off = ToggleOff;
  static Button = ToggleButton;
  static defaultProps = {onToggle: () => {}};

  state = {
    on: false
  }

  toggle = () => {
    this.setState( ({on}) => ({on : !on}),
      () => {
        this.props.onToggle(this.state.on)
      },
    );
  }

  //const {on} = this.state;
  //<Switch on={on} onClickHandler={this.toggle} />
  render() {
    const children = React.Children.map(this.props.children,
      child => React.cloneElement(child, {
        on: this.state.on,
        toggle: this.toggle
      }),
    )
    
    return (
      <div>
        {children}
      </div>
    );
  }
}

const ToggleOn = ({on, children}) => {
  return on ? children : null
}

const ToggleOff = ({on, children}) => {
  return on ? null : children
}

const ToggleButton = ({on, toggle, ...props}) => {
  return (
    <Switch on={on} onClick={toggle} {...props} />
  );
}

const Switch = ({on, className="", ...props}) => {
  return (
    <div>
      <h1> Hello world! </h1>
      <label class="switch">
        <input type="checkbox" checked={on} />
        <span class="slider round" onClick={props.onClickHandler}></span>
      </label>
    </div>
  );
}

export default App;
