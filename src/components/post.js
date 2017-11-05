import React from 'react'
import {Card, CardHeader, CardText} from 'material-ui/Card'
import Commands from './post-commands'

const Post = (props) => (
  <Card color={props.color}>
    <CardHeader title={props.post.title} />
    <CardText>{props.post.body}</CardText>
    <Commands />
  </Card>
)

export default Post
