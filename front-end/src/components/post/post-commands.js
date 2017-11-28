import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentHome from 'material-ui/svg-icons/action/home'
import ContentDelete from 'material-ui/svg-icons/action/delete'
import VoteDown from 'material-ui/svg-icons/action/thumb-down'
import VoteUp from 'material-ui/svg-icons/action/thumb-up'
import CommentForm from '../comment/form'
import {removePost, postVoteDown, postVoteUp} from './actions'
import PostForm from './form'

const style = {
  margin: 24
}

const Commands = (props) => (
  <div>
    <FloatingActionButton style={style} href='/' >
      <ContentHome />
    </FloatingActionButton>
    <PostForm post={props.post} />
    <CommentForm post={props.post} />
    <FloatingActionButton style={style} onClick={() => {
      props.removePost(props.post.id)
      props.history.push(`/`)
    }} >
      <ContentDelete />
    </FloatingActionButton>
    <FloatingActionButton style={style} onClick={() => {
      props.up(props.post)
    }} >
      <VoteUp />
    </FloatingActionButton>
    <FloatingActionButton style={style} onClick={() => {
      props.down(props.post)
    }} >
      <VoteDown />
    </FloatingActionButton>
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
