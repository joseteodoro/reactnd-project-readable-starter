import React from 'react'
import Post from './post'
import Comment from './comment'
import Commands from './post-commands'

const defaultData = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    timestamp: 1467166872634,
    title: 'Udacity is the best place to learn React',
    body: 'Everyone says so after all.',
    author: 'thingtwo',
    category: 'react',
    voteScore: 6,
    deleted: false,
    commentCount: 2
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    timestamp: 1468479767190,
    title: 'Learn Redux in 10 minutes!',
    body: 'Just kidding. It takes more than 10 minutes to learn technology.',
    author: 'thingone',
    category: 'redux',
    voteScore: -5,
    deleted: false,
    commentCount: 0
  }
}

const _comments = [{
  id: '8tu4bsun805n8un48ve89',
  parentId: "8xf0y6ziyjabvozdd253nd",
  timestamp: 1469479767190,
  body: 'Comments. Are. Cool.',
  author: 'thingone',
  voteScore: -5,
  deleted: false,
  parentDeleted: false
},{
  id: '894tuq4ut84ut8v4t8wun89g',
  parentId: "8xf0y6ziyjabvozdd253nd",
  timestamp: 1468166872634,
  body: 'Hi there! I am a COMMENT.',
  author: 'thingtwo',
  voteScore: 6,
  deleted: false,
  parentDeleted: false
}]

class ViewPost extends React.Component {

  constructor (props) {
    super(props)
    this.state = {post: {}, post_id: props.match.params.post_id, comments: []}
  }

  componentWillMount() {
    this.setState({post: defaultData[this.state.post_id], comments: _comments})
  }

  render () {
    return (
      <div>
        <div>
          <Post key={this.state.post.id} post={this.state.post} />
        </div>
        <div>
        {this.state.comments.map((comment) => {
          return <div key={comment.id}><Comment comment={comment} /></div>
        })}
        </div>
        <div>
          <Commands />
        </div>
      </div>)
  }
}

export default ViewPost
