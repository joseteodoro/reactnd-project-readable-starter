import React from 'react'
import {CardActions} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import FontIcon from 'material-ui/FontIcon'
import {blue500} from 'material-ui/styles/colors';

const iconStyles = {
  marginRight: 24,
}

const Commands = (props) => (
  <CardActions>
    <FlatButton icon={<FontIcon className="material-icons" style={iconStyles} color={blue500} >home</FontIcon>} />
    <FlatButton icon={<FontIcon className="material-icons" style={iconStyles} color={blue500} >mode_edit</FontIcon>} />
    <FlatButton icon={<FontIcon className="material-icons" style={iconStyles} color={blue500} >comment</FontIcon>} />
    <FlatButton icon={<FontIcon className="material-icons" style={iconStyles} color={blue500} >delete</FontIcon>} />
  </CardActions>
)

export default Commands
