import React from 'react'
import {
  TableHeaderColumn,
  TableRow
} from 'material-ui/Table'

const InlinePostHeader = (props) => (
  <TableRow>
    <TableHeaderColumn style={{textAlign: 'center'}}>Votes</TableHeaderColumn>
    <TableHeaderColumn style={{width: '60%'}}>Post</TableHeaderColumn>
    <TableHeaderColumn style={{textAlign: 'center'}}>Comments</TableHeaderColumn>
  </TableRow>
)

export default InlinePostHeader
