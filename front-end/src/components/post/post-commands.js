import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentHome from 'material-ui/svg-icons/action/home'
import ContentDelete from 'material-ui/svg-icons/action/delete'
import CommentForm from '../comment/form'
import {removePost} from './actions'
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
    <FloatingActionButton style={style} href='/' onClick={() => { this.props.removePost(props.post.id) }} >
      <ContentDelete />
    </FloatingActionButton>
  </div>
)

function mapDispatchToProps (dispatch) {
  return {
    removePost: data => dispatch(removePost(data))
  }
}

Commands.propTypes = {
  post: PropTypes.object.isRequired
}

export default connect(null, mapDispatchToProps)(Commands)
