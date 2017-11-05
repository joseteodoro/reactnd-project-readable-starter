import React from 'react'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import FontIcon from 'material-ui/FontIcon'
import {blue500} from 'material-ui/styles/colors'

const iconStyles = {
  marginRight: 24,
}

const Commands = (props) => (
  <span>
    <IconMenu iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}>
      <MenuItem primaryText="Edit" leftIcon={<FontIcon className="material-icons" style={iconStyles} color={blue500} >edit</FontIcon>}/>
      <MenuItem primaryText="Remove" leftIcon={<FontIcon className="material-icons" style={iconStyles} color={blue500} >delete</FontIcon>}/>
    </IconMenu>
  </span>
)

export default Commands
