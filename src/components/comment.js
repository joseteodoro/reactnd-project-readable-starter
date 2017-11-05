import React from 'react'
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FontIcon from 'material-ui/FontIcon'
import {blue500} from 'material-ui/styles/colors'
import Commands from './comment-commands'
import Vote from './vote-score'


const iconStyles = {
  marginRight: 24,
}

const Comment = (props) => (
  <Card>
    <CardText>{<div>
      <Commands />
      <Vote voteScore={props.comment.voteScore} />
      <span>{props.comment.author}: </span>
      {props.comment.body}
    </div>}</CardText>
  </Card>
)

// <FontIcon className="material-icons" style={iconStyles} color={blue500} >thumb_up</FontIcon>}/>

export default Comment
