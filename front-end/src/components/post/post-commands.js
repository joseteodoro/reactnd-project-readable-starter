import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentHome from 'material-ui/svg-icons/action/home'
import ContentDelete from 'material-ui/svg-icons/action/delete'
import CommentForm from '../comment/form'
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
    <FloatingActionButton style={style}>
      <ContentDelete />
    </FloatingActionButton>
  </div>
)

export default Commands
