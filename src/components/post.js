import React from 'react'
import {Card, CardText} from 'material-ui/Card'
import ReadableAppBar from './app-bar'

const Post = (props) => (
  <div>
    <ReadableAppBar title={props.post.title} />
    <Card>
      <CardText>{props.post.body}</CardText>
    </Card>
  </div>
)

export default Post
