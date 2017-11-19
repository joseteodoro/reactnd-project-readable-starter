import { combineReducers } from 'redux'

import {
  ADD_POST,
  UPDATE_POST,
  REMOVE_POST,
  ADD_COMMENT,
  UPDATE_COMMENT,
  REMOVE_COMMENT,
  POST_VOTE,
  COMMENT_VOTE
} from '../actions'

const initialPostState = {
  '8xf0y6ziyjabvozdd253nd': {
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
  '6ni6ok3ym7mf1p33lnez': {
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
const initialCommentState = {
  '894tuq4ut84ut8v4t8wun89g': {
    id: '894tuq4ut84ut8v4t8wun89g',
    parentId: '8xf0y6ziyjabvozdd253nd',
    timestamp: 1468166872634,
    body: 'Hi there! I am a COMMENT.',
    author: 'thingtwo',
    voteScore: 6,
    deleted: false,
    parentDeleted: false
  },
  '8tu4bsun805n8un48ve89': {
    id: '8tu4bsun805n8un48ve89',
    parentId: '8xf0y6ziyjabvozdd253nd',
    timestamp: 1469479767190,
    body: 'Comments. Are. Cool.',
    author: 'thingone',
    voteScore: -5,
    deleted: false,
    parentDeleted: false
  }
}

function post (state = initialPostState, action) {
  const {post} = action
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        [post.id]: post
      }
    case UPDATE_POST:
      return {
        ...state,
        [post.id]: post
      }
    case REMOVE_POST:
      return {
        ...state,
        [post.id]: {deleted: true}
      }
    case POST_VOTE:
      return {
        ...state,
        [post.id]: {voteScore: state[post.id].voteScore + post.change}
      }
    default :
      return state
  }
}

function comment (state = initialCommentState, action) {
  const {comment} = action
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        [comment.id]: comment
      }
    case UPDATE_COMMENT:
      return {
        ...state,
        [comment.id]: comment
      }
    case REMOVE_COMMENT:
      return {
        ...state,
        [comment.id]: {deleted: true}
      }
    case COMMENT_VOTE:
      return {
        ...state,
        [comment.id]: {voteScore: state[comment.id].voteScore + comment.change}
      }
    default :
      return state
  }
}

export default combineReducers({
  post,
  comment
})
