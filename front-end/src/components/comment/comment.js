import Moment from 'moment'
import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
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
      <span>Vote score: <Vote target={props.comment} voteUp={commentVoteUp} voteDown={commentVoteDown} /> {props.comment.author} commented at ({new Moment(props.comment.timestamp).format('DD/MM/YYYY, h:mm:ss a')}) </span>
    } />
    <CardText>{<div>{props.comment.body}</div>}</CardText>
    <CardActions>
      <CommentForm comment={props.comment} post={props.post} />
      <RaisedButton label='Remove comment' style={style} onClick={() => {
        props.deleteComment(props.comment.id, props.post.id)
        props.history.push(`/post/${props.post.id}`)
      }} />
    </CardActions>
  </Card>
)

function mapDispatchToProps (dispatch) {
  return {
    deleteComment: data => dispatch(removeComment(data))
  }
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired
}

export default connect(null, mapDispatchToProps)(withRouter(Comment))
