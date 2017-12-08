import React, {Component} from 'react'
import { connect } from 'react-redux'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import {addPost, updatePost} from './actions'

const style = {
  margin: 24
}

class PostForm extends Component {

  constructor (props) {
    super(props)
    this.defaultState = {
      open: false,
      title: '',
      body: '',
      author: '',
      category: null
    }
    this.state = props.post || this.defaultState
    this.state.open = false
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.changeCategory = this.changeCategory.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleOpen () {
    this.setState({open: true})
  };

  handleClose () {
    if (this.state.id) {
      this.props.editPost(this.state)
    } else {
      this.props.newPost(this.state)
    }
    this.setState(this.defaultState)
  }

  changeCategory (event, index, value) {
    this.setState({category: value})
  }

  handleChange (event, index, value) {
    const id = event.target.id
    const updated = {[id]: event.target.value}
    this.setState(updated)
  }

  actionButton (id) {
    if (id) {
      return 'Edit'
    } else {
      return 'Add Post'
    }
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
    const {title, body, author, category, id} = this.state
    return (
      <span>
        <RaisedButton style={this.props.style || style} onClick={this.handleOpen} label={this.actionButton(id)} />
        <Dialog
          title={this.actionButton(id)}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <TextField id='title' hintText='Post title' onChange={this.handleChange} floatingLabelText='Post title' value={title} /><br />
          <SelectField id='category' hintText='Post category' floatingLabelText='Post category' value={category} onChange={this.changeCategory} disabled={!!id} >
            <MenuItem key='react' value='react' primaryText='React' />
            <MenuItem key='redux' value='redux' primaryText='Redux' />
            <MenuItem key='udacity' value='udacity' primaryText='Udacity' />
          </SelectField><br />
          <TextField id='author' hintText='Your name' floatingLabelText='Post author' value={author} onChange={this.handleChange} disabled={!!id} /><br />
          <TextField id='body' hintText='Post Body' floatingLabelText='Post body' multiLine rows={5} value={body} onChange={this.handleChange} /><br />
        </Dialog>
      </span>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    newPost: (data) => dispatch(addPost(data)),
    editPost: (data) => dispatch(updatePost(data))
  }
}

export default connect(null, mapDispatchToProps)(PostForm)
