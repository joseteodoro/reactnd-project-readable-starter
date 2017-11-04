import React from 'react'
import FontIcon from 'material-ui/FontIcon'
import {blue500, red500} from 'material-ui/styles/colors'

const iconStyles = {
  marginRight: 24,
}

const Vote = (props) => (
  (props.voteScore >= 0?
    <FontIcon className="material-icons" style={iconStyles} color={blue500} >thumb_up</FontIcon> :
    <FontIcon className="material-icons" style={iconStyles} color={red500} >thumb_down</FontIcon>)
)

export default Vote
