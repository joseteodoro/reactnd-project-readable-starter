import React from 'react'
import { connect } from 'react-redux'
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon'
import PropTypes from 'prop-types'

const iconStyles = {
  margin: -1,
  width: 36,
  height: 36
}

const Vote = (props) => (
  <span>
    <span>
      <IconButton tooltip='Like' onClick={() => { props.up(props.target) }} >
        <FontIcon key={props.key} className='material-icons' style={iconStyles} >thumb_up</FontIcon>
      </IconButton>
    </span>
    <span>
      {props.target.voteScore}
    </span>
    <span>
      <IconButton tooltip='Dislike' onClick={() => { props.down(props.target) }} >
        <FontIcon key={props.key} className='material-icons' style={iconStyles} >thumb_down</FontIcon>
      </IconButton>
    </span>
  </span>
)

function mapDispatchToProps (dispatch, props) {
  return {
    up: data => dispatch(props.voteUp(data)),
    down: data => dispatch(props.voteDown(data))
  }
}

Vote.propTypes = {
  voteUp: PropTypes.func.isRequired,
  voteDown: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(Vote)
