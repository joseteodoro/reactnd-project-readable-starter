import React, {Component} from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentEdit from 'material-ui/svg-icons/image/edit'
import ContentAdd from 'material-ui/svg-icons/content/add'

const style = {
  margin: 24
}

export default class PostForm extends Component {

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

  actionButton (id) {
    if (id) {
      return <ContentEdit />
    } else {
      return <ContentAdd />
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
        <FloatingActionButton style={style} onClick={this.handleOpen} >
          {this.actionButton(id)}
        </FloatingActionButton>
        <Dialog
          title='New Post'
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
