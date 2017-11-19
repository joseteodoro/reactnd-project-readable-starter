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
    <TableRowColumn key={`category-${post.id}`} style={{textAlign: 'center'}}>{post.category}</TableRowColumn>
    <TableRowColumn key={`voteScore-${post.id}`} style={{textAlign: 'center'}}><Vote voteScore={post.voteScore} /></TableRowColumn>
    <TableRowColumn key={`title-${post.id}`} style={{width: '40%'}}><Link to={`/post/${post.id}`}>{post.title}</Link></TableRowColumn>
    <TableRowColumn key={`author-${post.id}`} style={{width: '20%', textAlign: 'center'}}>{post.author}</TableRowColumn>
    <TableRowColumn key={`commentCount-${post.id}`} style={{textAlign: 'center'}}>{post.commentCount}</TableRowColumn>
  </TableRow>
)

InlinePost.propTypes = {
  post: PropTypes.object.isRequired
}

export default InlinePost
