import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import CommentForm from '../comment/form'
import {removePost, postVoteDown, postVoteUp} from './actions'
import PostForm from './form'

const style = {
  margin: 24
}

const Commands = (props) => (
  <div>
    <RaisedButton style={style} label='Home' href='/' />
    <PostForm post={props.post} />
    <CommentForm post={props.post} />
    <RaisedButton style={style} label='Remove post' onClick={() => {
      props.removePost(props.post.id)
      props.history.push(`/`)
    }} />
  </div>
)

function mapDispatchToProps (dispatch) {
  return {
    removePost: data => dispatch(removePost(data)),
    up: data => dispatch(postVoteUp(data)),
    down: data => dispatch(postVoteDown(data))
  }
}

Commands.propTypes = {
  post: PropTypes.object.isRequired
}

export default connect(null, mapDispatchToProps)(withRouter(Commands))
