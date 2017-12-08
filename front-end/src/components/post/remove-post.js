import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton'
import {removePost} from './actions'

const style = {
  margin: 24
}

const RemovePost = (props) => (
  <RaisedButton style={props.style || style} label='Remove' onClick={() => {
    props.removePost(props.post.id)
    props.history.push(`/`)
  }} />
)

function mapDispatchToProps (dispatch) {
  return {
    removePost: data => dispatch(removePost(data))
  }
}

RemovePost.propTypes = {
  post: PropTypes.object.isRequired
}

export default connect(null, mapDispatchToProps)(withRouter(RemovePost))
