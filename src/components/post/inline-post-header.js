import React from 'react'
import {
  TableHeaderColumn,
  TableRow
} from 'material-ui/Table'

const InlinePostHeader = (props) => (
  <TableRow>
    <TableHeaderColumn style={{textAlign: 'center'}}>Category</TableHeaderColumn>
    <TableHeaderColumn style={{textAlign: 'center'}}>Votes</TableHeaderColumn>
    <TableHeaderColumn style={{width: '40%'}}>Title</TableHeaderColumn>
    <TableHeaderColumn style={{width: '20%', textAlign: 'center'}}>Author</TableHeaderColumn>
    <TableHeaderColumn style={{textAlign: 'center'}}>Comments</TableHeaderColumn>
  </TableRow>
)

export default InlinePostHeader
