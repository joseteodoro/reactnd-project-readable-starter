import Moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  TableRow,
  TableRowColumn
} from 'material-ui/Table'
import Vote from '../vote/vote-score'

const InlinePost = ({post}) => (
  <TableRow>
    <TableRowColumn key={`voteScore-${post.id}`} style={{textAlign: 'center'}}><Vote voteScore={post.voteScore} /></TableRowColumn>
    <TableRowColumn key={`title-${post.id}`} style={{width: '60%'}}>
      <h3>[{post.category}] <Link to={`/post/${post.id}`}>{post.title}</Link></h3><br /><br />
      {post.author} ({new Moment(post.timestamp).format('dddd, MMMM Do YYYY, h:mm:ss a')})
    </TableRowColumn>
    <TableRowColumn key={`commentCount-${post.id}`} style={{textAlign: 'center'}}>{post.commentCount}</TableRowColumn>
  </TableRow>
)

InlinePost.propTypes = {
  post: PropTypes.object.isRequired
}

export default InlinePost
