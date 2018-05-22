import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios'
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Books from './components/Books'
import BookInfo from './components/BookInfo'

class App extends Component {
  constructor() {
    super();
    this.state = {
      // books: []
    }
  }

  // componentDidMount() {
  //   axios.get('/api/books').then( results => {
  //     this.setState({books: results.data})
  //   })
  // }

  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <Books books={this.state.books}/>}/>
        <Route path="/:id" component={BookInfo}/>
      </Switch>
    );
  }
}

export default App;
