import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentHome from 'material-ui/svg-icons/action/home'
// import ContentAdd from 'material-ui/svg-icons/content/add'
import ContentAdd from 'material-ui/svg-icons/communication/chat'
import ContentEdit from 'material-ui/svg-icons/image/edit'
import ContentDelete from 'material-ui/svg-icons/action/delete'

const style = {
  margin: 24
}

const Commands = (props) => (
  <div>
    <FloatingActionButton style={style} href='/' >
      <ContentHome />
    </FloatingActionButton>
    <FloatingActionButton style={style}>
      <ContentEdit />
    </FloatingActionButton>
    <FloatingActionButton style={style}>
      <ContentAdd />
    </FloatingActionButton>
    <FloatingActionButton style={style}>
      <ContentDelete />
    </FloatingActionButton>
  </div>
)

export default Commands
