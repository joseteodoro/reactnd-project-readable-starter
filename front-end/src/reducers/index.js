import { combineReducers } from 'redux'

import {
  POST_ADDED,
  POST_UPDATED,
  POST_REMOVED,
  POST_VOTED_UP,
  POST_VOTED_DOWN,
  POSTS_FETCHED
} from '../components/post/actions'

// const initialCommentState = {
//   '894tuq4ut84ut8v4t8wun89g': {
//     id: '894tuq4ut84ut8v4t8wun89g',
//     parentId: '8xf0y6ziyjabvozdd253nd',
//     timestamp: 1468166872634,
//     body: 'Hi there! I am a COMMENT.',
//     author: 'thingtwo',
//     voteScore: 6,
//     deleted: false,
//     parentDeleted: false
//   },
//   '8tu4bsun805n8un48ve89': {
//     id: '8tu4bsun805n8un48ve89',
//     parentId: '8xf0y6ziyjabvozdd253nd',
//     timestamp: 1469479767190,
//     body: 'Comments. Are. Cool.',
//     author: 'thingone',
//     voteScore: -5,
//     deleted: false,
//     parentDeleted: false
//   }
// }

function posts (state = {items: []}, action) {
  switch (action.type) {
    case POST_ADDED: {
      const items = state.items.concat(action.post)
      return {...state, items}
    }

    case POST_VOTED_UP:
    case POST_VOTED_DOWN:
    case POST_UPDATED: {
      const items = state.items.map((item) => {
        return (item.id === action.post.id ? action.post : item)
      })
      return {...state, items}
    }

    case POST_REMOVED: {
      const { id } = action
      const items = state.items.filter((item) => (item.id === id))
      return {...state, items}
    }

    case POSTS_FETCHED: {
      console.log(require('util').inspect(action, { depth: null }))
      const { posts } = action
      const items = posts.filter((post) => !post.deleted)
      return {...state, items}
    }

    default :
      return state
  }
}

// function comment (state = initialCommentState, action) {
//   const {comment} = action
//   switch (action.type) {
//     case ADD_COMMENT:
//       return {
//         ...state,
//         [comment.id]: comment
//       }
//     case UPDATE_COMMENT:
//       return {
//         ...state,
//         [comment.id]: comment
//       }
//     case REMOVE_COMMENT:
//       return {
//         ...state,
//         [comment.id]: {deleted: true}
//       }
//     case COMMENT_VOTE:
//       return {
//         ...state,
//         [comment.id]: {voteScore: state[comment.id].voteScore + comment.change}
//       }
//     default :
//       return state
//   }
// }

export default combineReducers({
  posts
  // ,comment
})
