import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentHome from 'material-ui/svg-icons/action/home'
import ContentEdit from 'material-ui/svg-icons/image/edit'
import ContentDelete from 'material-ui/svg-icons/action/delete'
import CommentForm from '../comment/form'

const style = {
  margin: 24
}

const Commands = (props) => (
  <div>
    <FloatingActionButton style={style} href='/' >
      <ContentHome />
    </FloatingActionButton>
    <FloatingActionButton style={style}>
      <ContentEdit />
    </FloatingActionButton>
    <CommentForm post={props.post} />
    <FloatingActionButton style={style}>
      <ContentDelete />
    </FloatingActionButton>
  </div>
)

export default Commands
