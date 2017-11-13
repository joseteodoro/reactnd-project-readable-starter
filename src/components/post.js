import React from 'react'
import {Card, CardHeader, CardText} from 'material-ui/Card'

const Post = (props) => (
  <Card color={props.color}>
    <CardHeader title={props.post.title} />
    <CardText>{props.post.body}</CardText>
  </Card>
)

export default Post
