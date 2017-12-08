import Moment from 'moment'
import React from 'react'
import { connect } from 'react-redux'
import {Card, CardText, CardHeader} from 'material-ui/Card'
import Comment from '../comment/comment'
import Commands from './post-commands'
import Vote from '../vote/vote-score'
import {postVoteDown, postVoteUp} from './actions'

class Post extends React.Component {

  subtitle (post) {
    return (<div>
      <Vote target={post} voteUp={postVoteUp} voteDown={postVoteDown} /> {post.author} posted at ({new Moment(post.timestamp).format('dddd, MMMM Do YYYY, h:mm:ss a')})}
    </div>)
  }

  render () {
    const { post, comments } = this.props
    return (
      <div>
        <div>
          <Card>
            <CardHeader subtitle={this.subtitle(post)} />
            <CardText>{post.body}</CardText>
          </Card>
          <Commands post={post} />
        </div>
        {comments ? (
          <div>
            {comments.map((comment) => {
              return <div key={comment.id}><Comment comment={comment} post={post} /></div>
            })}
          </div>
        ) : (
          <Card>
            <CardText>Loading comments</CardText>
          </Card>
        )}
      </div>
    )
  }
}


function mapStateToProps ({ posts }) {
  const {post, comments} = posts
  const res = {}
  if (post) {
    res.post = post
  }
  if (comments && comments.length) {
    res.comments = comments.sort((left, right) => right.voteScore - left.voteScore)
  } else {
    res.comments = []
  }
  return res
}

export default connect(mapStateToProps)(Post)
