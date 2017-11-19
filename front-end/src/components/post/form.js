import React, {Component} from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField'

export default class PostForm extends Component {

  constructor (props) {
    super(props)
    this.state = {
      open: false,
      post: props.post || {}
    }
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.changeCategory = this.changeCategory.bind(this)
  }

  handleOpen () {
    this.setState({open: true})
  };

  handleClose () {
    console.log(require('util').inspect(this.state.post, { depth: null }))
    this.setState({open: false})
  }

  changeCategory (event, index, value) {
    this.setState({post: {category: value}})
  }

  render () {
    const actions = [
      <FlatButton
        label='Ok'
        primary
        onClick={this.handleClose}
      />,
      <FlatButton
        label='Cancel'
        onClick={this.handleClose}
      />
    ]

    return (
      <div>
        <RaisedButton label='Add Post' onClick={this.handleOpen} />
        <Dialog
          title='New Post'
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <TextField hintText='Post title' floatingLabelText='Post title' value={this.state.post.title} /><br />
          <SelectField hintText='Post category' floatingLabelText='Post category' value={this.state.post.category} >
            <MenuItem value={'react'} primaryText='React' />
            <MenuItem value={'redux'} primaryText='Redux' />
            <MenuItem value={'udacity'} primaryText='Udacity' />
          </SelectField><br />
          <TextField hintText='Your name' floatingLabelText='Post author' value={this.state.post.author} /><br />
          <TextField hintText='Post Body' floatingLabelText='Post body' multiLine rows={5} value={this.state.post.body} /><br />
        </Dialog>
      </div>
    )
  }
}
