import React from 'react'
import { connect } from 'react-redux'
import ContentFilter from 'material-ui/svg-icons/content/filter-list'
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import { sortPosts } from './actions'

const style = {
  margin: 24
}

const PostSort = (props) => (
  <span>
    <IconMenu style={style} iconButtonElement={<IconButton><ContentFilter /></IconButton>} >
      <MenuItem onClick={() => { props.changeSort({field: 'voteScore', order: 'desc'}) }} primaryText='Best scored first' />
      <MenuItem onClick={() => { props.changeSort({field: 'timestamp', order: 'desc'}) }} primaryText='Newest first' />
      <MenuItem onClick={() => { props.changeSort({field: 'voteScore', order: 'asc'}) }} primaryText='Best scored last' />
      <MenuItem onClick={() => { props.changeSort({field: 'timestamp', order: 'asc'}) }} primaryText='Oldest first' />
      <MenuItem onClick={() => { props.changeSort({field: 'commentCount', order: 'desc'}) }} primaryText='More comentend first' />
      <MenuItem onClick={() => { props.changeSort({field: 'commentCount', order: 'asc'}) }} primaryText='Less commented first' />
    </IconMenu>
  </span>
)

function mapDispatchToProps (dispatch) {
  return {
    changeSort: (data) => dispatch(sortPosts(data))
  }
}

export default connect(null, mapDispatchToProps)(PostSort)
