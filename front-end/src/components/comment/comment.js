import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {Card, CardText, CardHeader, CardActions} from 'material-ui/Card'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentDelete from 'material-ui/svg-icons/action/delete'
import VoteDown from 'material-ui/svg-icons/action/thumb-down'
import VoteUp from 'material-ui/svg-icons/action/thumb-up'
import Vote from '../vote/vote-score'
import CommentForm from './form'
import {removeComment, commentVoteDown, commentVoteUp} from './actions'

const style = {
  margin: 5
}

const Comment = (props) => (
  <Card>
    <CardHeader subtitle={
      <span>Vote score: <Vote voteScore={props.comment.voteScore} /></span>
    } />
    <CardText>{<div>
      {props.comment.author}: {props.comment.body}
    </div>}</CardText>
    <CardActions>
      <CommentForm comment={props.comment} post={props.post} />
      <FloatingActionButton mini secondary style={style} onClick={() => {
        props.deleteComment(props.comment.id)
        props.history.push(`/post/${props.post.id}`)
      }} >
        <ContentDelete />
      </FloatingActionButton>
      <FloatingActionButton mini secondary style={style} onClick={() => {
        props.up(props.comment)
      }} >
        <VoteUp />
      </FloatingActionButton>
      <FloatingActionButton mini secondary style={style} onClick={() => {
        props.down(props.comment)
      }} >
        <VoteDown />
      </FloatingActionButton>
    </CardActions>
  </Card>
)

function mapDispatchToProps (dispatch) {
  return {
    deleteComment: data => dispatch(removeComment(data)),
    up: data => dispatch(commentVoteUp(data)),
    down: data => dispatch(commentVoteDown(data))
  }
}

export default connect(null, mapDispatchToProps)(withRouter(Comment))
