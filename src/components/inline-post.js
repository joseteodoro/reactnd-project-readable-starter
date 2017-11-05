import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  TableRow,
  TableRowColumn
} from 'material-ui/Table'
import Vote from './vote-score'

const InlinePost = (props) => (
  <TableRow>
      <TableRowColumn style={{textAlign: 'center'}}>{props.post.category}</TableRowColumn>
      <TableRowColumn style={{textAlign: 'center'}}><Vote voteScore={props.post.voteScore} /></TableRowColumn>
      <TableRowColumn style={{width: '40%'}}><Link to={`/post/${props.post.id}`}>{props.post.title}</Link></TableRowColumn>
      <TableRowColumn style={{width: '20%', textAlign: 'center'}}>{props.post.author}</TableRowColumn>
      <TableRowColumn style={{textAlign: 'center'}}>{props.post.commentCount}</TableRowColumn>
  </TableRow>
)

InlinePost.propTypes = {
  post: PropTypes.object.isRequired,
}

export default InlinePost
