import Moment from 'moment'
import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {Card, CardText, CardHeader, CardActions} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'
import Vote from '../vote/vote-score'
import CommentForm from './form'
import {removeComment, commentVoteDown, commentVoteUp} from './actions'

const style = {
  margin: 24
}

const Comment = (props) => (
  <Card>
    <CardHeader subtitle={
      <span>({new Moment(props.comment.timestamp).format('dddd, MMMM Do YYYY, h:mm:ss a')}) Vote score: <Vote voteScore={props.comment.voteScore} /></span>
    } />
    <CardText>{<div>
      {props.comment.author}: {props.comment.body}
    </div>}</CardText>
    <CardActions>
      <CommentForm comment={props.comment} post={props.post} />
      <RaisedButton label='Remove comment' style={style} onClick={() => {
        props.deleteComment(props.comment.id)
        props.history.push(`/post/${props.post.id}`)
      }} />
      <RaisedButton label='Like' style={style} onClick={() => {
        props.up(props.comment)
      }} />
      <RaisedButton label='Dislike' style={style} onClick={() => {
        props.down(props.comment)
      }} />
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
