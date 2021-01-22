import React, { Component } from 'react';
import * as tf from '@tensorflow/tfjs';
import './App.css';
import Visual from './visual';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      showCamera: false,
    };
    this.activateCamera = this.activateCamera.bind(this);
  }

  activateCamera() {
    this.setState(state => ({
      showCamera: !state.showCamera, //
    }));
  }

  render() {
    return (
      <div>
        <div>
          <h1>Sign Language Interpreter</h1>
        </div>
        <div className="buttonForCamera">
          <button className="button" onClick={this.activateCamera}>
            Click for Camera
          </button>
          {!this.state.showCamera ? (
            ''
          ) : (
            <div className="App">
              <header className="App-header">
                <Visual />
              </header>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
