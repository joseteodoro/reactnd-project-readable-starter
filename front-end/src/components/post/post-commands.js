import React from 'react'
import PropTypes from 'prop-types'
import RaisedButton from 'material-ui/RaisedButton'
import CommentForm from '../comment/form'
import PostForm from './form'
import RemovePost from './remove-post'

const style = {
  margin: 24
}

const Commands = (props) => (
  <div>
    <RaisedButton style={style} label='Home' href='/' />
    <PostForm post={props.post} />
    <CommentForm post={props.post} />
    <RemovePost post={props.post} />
  </div>
)

Commands.propTypes = {
  post: PropTypes.object.isRequired
}

export default Commands
