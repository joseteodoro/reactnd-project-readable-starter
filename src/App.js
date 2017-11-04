import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import Posts from './components/posts'
import Post from './components/post'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={Posts} />
          <Route path='/category/:category_id' component={Posts} />
          <Route path='/post/:post_id' component={Post} />
          <Route path='/edit_post/:post_id' component={Post} />
        </Switch>
      </div>
    );
  }
}
