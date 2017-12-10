import React from 'react'
import {Card, CardText, CardActions} from 'material-ui/Card'
import RaisedButton from 'material-ui/RaisedButton'

const style = {
  margin: 24
}

const NotFound = (props) => (
  <Card>
    {props.customMessage ? (
      <CardText>{props.customMessage}</CardText>
    ) : (
      <CardText>Page not found.</CardText>
    ) }
    <CardActions>
      <RaisedButton style={style} label='Home' href='/' />
    </CardActions>
  </Card>
)

export default NotFound
