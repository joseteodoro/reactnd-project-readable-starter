import React from 'react'
import { connect } from 'react-redux'
import Post from './post'
import NotFound from './not-found/not-found'

const PostContent = (props) => (
  <div>{props.post.deleted ? (<NotFound />) : (<Post />)}</div>
)

function mapStateToProps ({ posts }, {match}) {
  const {post} = posts
  const res = {}
  if (post) {
    res.post = post
  }
  return res
}

export default connect(mapStateToProps)(PostContent)
