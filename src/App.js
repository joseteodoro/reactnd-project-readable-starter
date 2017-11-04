import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Posts from './components/posts'
// import Post from './components/post'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Switch>
          <Route exact path='/' component={Posts} />
          // <Route path='/category/:category_id' component={Posts} />
          // <Route path='/post/:post_id' component={Posts} />
          // <Route path='/edit_post/:post_id' component={Posts} />
        </Switch>
      </MuiThemeProvider>
    );
  }
}

export default App
