import Moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  TableRow,
  TableRowColumn
} from 'material-ui/Table'
import Vote from '../vote/vote-score'
import {postVoteDown, postVoteUp} from './actions'
import PostForm from './form'
import RemovePost from './remove-post'

const buttonStyle = {
  margin: 24
}

const InlinePost = ({post}) => (
  <TableRow>
    <TableRowColumn key={`voteScore-${post.id}`} style={{textAlign: 'center'}}><Vote target={post} voteUp={postVoteUp} voteDown={postVoteDown} /></TableRowColumn>
    <TableRowColumn key={`title-${post.id}`} style={{width: '60%'}}>
      <h3>[{post.category}] <Link to={`/${post.category}/${post.id}`}>{post.title}</Link></h3>
      {post.author} ({new Moment(post.timestamp).format('DD/MM/YYYY h:mm:ss a')}) <PostForm post={post} style={buttonStyle} /><RemovePost post={post} style={buttonStyle} />
    </TableRowColumn>
    <TableRowColumn key={`commentCount-${post.id}`} style={{textAlign: 'center'}}>{post.commentCount}</TableRowColumn>
  </TableRow>
)

InlinePost.propTypes = {
  post: PropTypes.object.isRequired
}

export default InlinePost
