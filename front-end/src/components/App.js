import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import PostList from './post/post-list'
import Post from './post/post'

class App extends Component {
  render () {
    return (
      <div>
        <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet' />
        <MuiThemeProvider>
          <Switch>
            <Route exact path='/:category?' component={PostList} />
            <Route path='/post/:post_id' component={Post} />
          </Switch>
        </MuiThemeProvider>
      </div>
    )
  }
}

export default App
