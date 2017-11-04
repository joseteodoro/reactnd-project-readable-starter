import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Categories from './components/list-categories'
import Posts from './components/posts'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' render={() => (
          <Categories />
        )} />
        <Route path='/category/:category_name' render={({ history }) => (
          <Posts />
        )} />
      </div>
    );
  }
}
