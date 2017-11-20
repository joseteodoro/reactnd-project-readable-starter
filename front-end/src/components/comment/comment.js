import React from 'react'
import {Card, CardText} from 'material-ui/Card'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentDelete from 'material-ui/svg-icons/action/delete'
// import VoteDown from 'material-ui/svg-icons/action/thumb-down'
// import VoteUp from 'material-ui/svg-icons/action/thumb-up'
import Vote from '../vote/vote-score'
import CommentForm from './form'

const style = {
  margin: 5
}

const Comment = (props) => (
  <Card>
    <CardText>{<div>
      <span>
        <CommentForm comment={props.comment} post={props.post} />
        <FloatingActionButton mini secondary style={style} >
          <ContentDelete />
        </FloatingActionButton>
      </span>
      <Vote voteScore={props.comment.voteScore} />
      <span>{props.comment.author}: </span>
      {props.comment.body}
    </div>}</CardText>
  </Card>
)

export default Comment
