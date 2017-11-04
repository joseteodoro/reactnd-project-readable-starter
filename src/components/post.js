import React from 'react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import FontIcon from 'material-ui/FontIcon'
import {blue500} from 'material-ui/styles/colors';
import Commands from './post-commands'

const iconStyles = {
  marginRight: 36,
}

const Post = (props) => (
  <Card color={props.color}>
    <CardHeader title={props.post.title} />
    <CardText>{props.post.body}</CardText>
    <Commands />
  </Card>
)

export default Post
