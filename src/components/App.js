import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/index.css';

import { Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import MemeItem from './MemeItem';
import MyMemes from './MyMemes';

class App extends Component {
  constructor() {
    super();
    this.state = {
      memeLimit: 10,
      text0: '',
      text1: ''
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <h2>
          <u>Welcome To The Meme Generator!</u>
        </h2>
        <MyMemes />
        <h4>
          <i>Write Some Text</i>
        </h4>
        <Form inline>
          <FormGroup>
            <ControlLabel>Top</ControlLabel>{' '}
            <FormControl name="text0" onChange={this.onChange} type="text" />
          </FormGroup>{' '}
          <FormGroup>
            <ControlLabel>Bottom</ControlLabel>{' '}
            <FormControl name="text1" onChange={this.onChange} type="text" />
          </FormGroup>
        </Form>
        {this.props.memes.slice(0, this.state.memeLimit).map((meme, index) => {
          return (
            <MemeItem
              key={index}
              meme={meme}
              text0={this.state.text0}
              text1={this.state.text1}
            />
          );
        })}
        <div
          className="meme-button"
          onClick={() => {
            this.setState({ memeLimit: this.state.memeLimit + 10 });
          }}
        >
          load more...
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(
  mapStateToProps,
  null
)(App);
