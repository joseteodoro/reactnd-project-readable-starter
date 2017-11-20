import React, {Component} from 'react'
import Dialog from 'material-ui/Dialog'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/communication/chat'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

const style = {
  margin: 24
}

export default class CommentForm extends Component {

  constructor (props) {
    super(props)
    this.defaultState = {
      open: false,
      parentId: props.post.id,
      body: '',
      author: ''
    }
    this.state = props.comment || this.defaultState
    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleOpen () {
    this.setState({open: true})
  };

  handleClose () {
    console.log(require('util').inspect(this.state, { depth: null }))
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
    const {body, author} = this.state
    move the button to outside component
    return (
      <span>
        <FloatingActionButton style={style} onClick={this.handleOpen} >
          <ContentAdd />
        </FloatingActionButton>
        <Dialog
          title='New Comment'
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <TextField id='author' hintText='Your name' floatingLabelText='Comment author' value={author} onChange={this.handleChange} /><br />
          <TextField id='body' hintText='Comment body' floatingLabelText='Comment body' multiLine rows={5} value={body} onChange={this.handleChange} /><br />
        </Dialog>
      </span>
    )
  }
}
