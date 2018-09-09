import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import _ from 'lodash';

library.add(faStar)

const iconStyles = {
  margin: '0.5em',
  fontSize: '24px'
}

const spanStyle = {
  display: 'inline-block',
  margin: '0.5em',
  textAlign: 'center',
  backgroundColor: '#CCC',
  width: '24px',
  borderRadius: '50%',
  cursor: 'pointer'
}

const selected = {
  display: 'inline-block',
  margin: '0.5em',
  textAlign: 'center',
  width: '24px',
  borderRadius: '50%',
  backgroundColor: '#eee',
  color: '#ddd',
  cursor: 'not-allowed'
}

const used = {
  display: 'inline-block',
  margin: '0.5em',
  textAlign: 'center',
  width: '24px',
  borderRadius: '50%',
  backgroundColor: '#aaddaa',
  color: '#99bb99',
  cursor: 'not-allowed'
}

const Stars = (props) => {
  const numberOfStars = 1 + Math.floor(Math.random() * 9);

  let stars = [];
  for (let i = 0; i < numberOfStars; i++) {
    stars.push(<FontAwesomeIcon style={iconStyles} icon="star" key={i} />)
  }
  return (
    <div className="col-5">
      { stars }
    </div>
  );
}

const Button = (props) => {
  return (
    <div className="col-2">
      <button>=</button>
    </div>
  );
}

const Answer = (props) => {
  return (
    <div className="col-5">
      ...
    </div>
  );
}

const Numbers = (props) => {
  return (
    <div className="card text-center">
      <div>
        {Numbers.list.map((number, i) =>
          <span key={i} style={spanStyle}>{number}</span>
        )}
      </div>
    </div>
  );
}
Numbers.list = _.range(1, 10);

class Game extends Component {
  render() {
    return (
      <div className="container">
        <h3>Play Nine</h3>
        <hr />
        <div className="row">
          <Stars />
          <Button />
          <Answer />
        </div>
        <br />
        <Numbers />
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Game />
      </div>
    );
  }
}

export default App;
