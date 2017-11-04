import React from 'react'
import PropTypes from 'prop-types'
import {
  TableRow,
  TableRowColumn
} from 'material-ui/Table'

const InlinePost = (props) => (
  <TableRow>
      <TableRowColumn style={{textAlign: 'center'}}>{props.post.category}</TableRowColumn>
      <TableRowColumn style={{textAlign: 'center'}}>{props.post.voteScore}</TableRowColumn>
      <TableRowColumn style={{width: '50%'}}>{props.post.title}</TableRowColumn>
      <TableRowColumn style={{width: '20%', textAlign: 'center'}}>{props.post.author}</TableRowColumn>
      <TableRowColumn style={{textAlign: 'center'}}>{props.post.commentCount}</TableRowColumn>
  </TableRow>
)

InlinePost.propTypes = {
  post: PropTypes.object.isRequired,
}

export default InlinePost
