import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Home from './components/home'
import ViewPost from './components/view_post'

class App extends Component {
  render() {
    return (
      <div>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <MuiThemeProvider>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/post/:post_id' component={ViewPost} />
        </Switch>
      </MuiThemeProvider>
      </div>
    );
  }
}

export default App
