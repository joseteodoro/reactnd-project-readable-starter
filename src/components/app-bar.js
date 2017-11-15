import React from 'react'
import AppBar from 'material-ui/AppBar'

const ReadableAppBar = (props) => (
  <AppBar title={props.title} iconElementLeft={<span />} />
)

export default ReadableAppBar
