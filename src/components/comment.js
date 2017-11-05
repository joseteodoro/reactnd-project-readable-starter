import React from 'react'
import {Card, CardText} from 'material-ui/Card'
import Commands from './comment-commands'
import Vote from './vote-score'

const Comment = (props) => (
  <Card>
    <CardText>{<div>
      <Commands />
      <Vote voteScore={props.comment.voteScore} />
      <span>{props.comment.author}: </span>
      {props.comment.body}
    </div>}</CardText>
  </Card>
)

export default Comment
