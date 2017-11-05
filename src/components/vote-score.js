import React from 'react'
import FontIcon from 'material-ui/FontIcon'
import Thumb from './thumb'

const Vote = (props) => (
    <span>{props.voteScore} <Thumb voteScore={props.voteScore} /></span>
)

export default Vote
