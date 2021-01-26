import React, { Component } from "react";
import * as tf from "@tensorflow/tfjs";
import "./App.css";
import Visual from "./visual";
import Button from "@material-ui/core/Button";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      showCamera: false,
    };
    this.activateCamera = this.activateCamera.bind(this);
  }

  activateCamera() {
    this.setState((state) => ({
      showCamera: !state.showCamera, //
    }));
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1>Show Me The EMOJI </h1>
        </div>
        <div className="buttonForCamera">
          <Button
            className="button"
            onClick={this.activateCamera}
            variant="contained"
            color="secondary"
            size="large"
            style={{ fontSize: 14, fontFamily: "Helvetica Neue" }}
            startIcon={<EmojiPeopleIcon />}
          >
            {" "}
            YOLO
          </Button>
          {!this.state.showCamera ? (
            ""
          ) : (
            <div>
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
