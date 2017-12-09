import React, {Component} from 'react'
import { connect } from 'react-redux'
import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import PropTypes from 'prop-types'
import {addComment, updateComment} from './actions'

const style = {
  margin: 24
}

class CommentForm extends Component {

  constructor (props) {
    super(props)
    this.defaultState = {
      open: false,
      parentId: props.post.id,
      body: '',
      author: '',
      bodyError: null,
      authorError: null
    }
    this.state = props.comment || this.defaultState
    this.state.open = false
    this.handleOpen = this.handleOpen.bind(this)
    this.handleCloseSaving = this.handleCloseSaving.bind(this)
    this.handleCloseCanceling = this.handleCloseCanceling.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleOpen () {
    this.setState({open: true})
  };

  handleCloseSaving () {
    let accepted = true
    let errors = {}
    if (!this.state.author) {
      errors.authorError = 'Author name is required!'
      accepted = false
    }
    if (!this.state.body) {
      errors.bodyError = 'Body is required!'
      accepted = false
    }
    if (!accepted) {
      this.setState({...this.state, ...errors})
      return
    }
    if (this.state.id) {
      this.props.update(this.state)
    } else {
      this.props.add(this.state)
    }
    this.setState(this.defaultState)
  }

  handleCloseCanceling () {
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
      return (<RaisedButton style={style} onClick={this.handleOpen} label='Edit comment' />)
    } else {
      return (<RaisedButton style={style} label='New Comment' onClick={this.handleOpen} />)
    }
  }

  render () {
    const actions = [
      <FlatButton
        label='Ok'
        primary
        onClick={this.handleCloseSaving}
      />,
      <FlatButton
        label='Cancel'
        onClick={this.handleCloseCanceling}
      />
    ]
    const {body, author, id, bodyError, authorError} = this.state
    return (
      <span>
        {this.actionButton(id)}
        <Dialog
          title='Comment data'
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleCloseCanceling}
        >
          <TextField id='author' hintText='Your name' floatingLabelText='Comment author' value={author} onChange={this.handleChange} disabled={!!id} errorText={authorError} /><br />
          <TextField id='body' hintText='Comment body' floatingLabelText='Comment body' multiLine rows={5} value={body} onChange={this.handleChange} errorText={bodyError} /><br />
        </Dialog>
      </span>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    add: data => dispatch(addComment(data)),
    update: data => dispatch(updateComment(data))
  }
}

CommentForm.propTypes = {
  post: PropTypes.object.isRequired
}

export default connect(null, mapDispatchToProps)(CommentForm)
