import React from 'react'
import {Card, CardText} from 'material-ui/Card'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentEdit from 'material-ui/svg-icons/image/edit'
import ContentDelete from 'material-ui/svg-icons/action/delete'
// import VoteDown from 'material-ui/svg-icons/action/thumb-down'
// import VoteUp from 'material-ui/svg-icons/action/thumb-up'
import Vote from './vote-score'

const style = {
  margin: 5
}

const Comment = (props) => (
  <Card>
    <CardText>{<div>
      <span>
        <FloatingActionButton mini secondary style={style} >
          <ContentEdit />
        </FloatingActionButton>
        <FloatingActionButton mini secondary style={style} >
          <ContentDelete />
        </FloatingActionButton>
      </span>
      <Vote voteScore={props.comment.voteScore} />
      <span>{props.comment.author}: </span>
      {props.comment.body}
    </div>}</CardText>
  </Card>
)

// <FloatingActionButton mini secondary style={style} >
//   <VoteDown />
// </FloatingActionButton>
// <FloatingActionButton mini secondary style={style} >
//   <VoteUp />
// </FloatingActionButton>

export default Comment
