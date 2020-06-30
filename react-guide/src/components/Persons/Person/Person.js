import React, { Component } from 'react';
import classes from './Person.css';

class Person extends Component{

  // static getDerivedStateFromProps(props, state){
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[Persons.js] shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return { messega: 'Snapshot!' };
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log(snapshot)
    console.log('[Persons.js] componentDidUpdate');
  }

  render() {
    console.log('[Person.js] rendering...');
    return(
      <div className={classes.Person}>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </div>
    );
  }
};

export default Person;
