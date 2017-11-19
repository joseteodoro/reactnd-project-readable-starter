import React from 'react'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import FilterList from 'material-ui/svg-icons/content/filter-list'

function filterButton () {
  return <IconButton><FilterList /></IconButton>
}

const Sort = (props) => (
  <IconMenu iconButtonElement={filterButton()} onChange={this.handleChangeMultiple} value={this.state.valueMultiple} multiple >
    {props.values.map((value, index) => {
      <MenuItem value={index} primaryText={value} />
    })}
  </IconMenu>
)

export default Sort
