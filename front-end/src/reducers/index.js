import { combineReducers } from 'redux'

import {
  POST_ADDED,
  POST_UPDATED,
  POST_REMOVED,
  POST_VOTED_UP,
  POST_VOTED_DOWN,
  POSTS_FETCHED,
  POST_LOADED
} from '../components/post/actions'
import {
  COMMENT_UPDATED,
  COMMENT_REMOVED,
  COMMENT_VOTED_UP,
  COMMENT_VOTED_DOWN,
  COMMENT_ADDED
} from '../components/comment/actions'

function posts (state = {items: [], comments: []}, action) {
  switch (action.type) {
    case POST_ADDED: {
      const items = state.items.concat(action.post)
      return {...state, items}
    }

    case POST_VOTED_UP:
    case POST_VOTED_DOWN:
    case POST_UPDATED: {
      const { post } = action
      const items = state.items.map((item) => {
        return (item.id === post.id ? post : item)
      })
      return {...state, items, post}
    }

    case POST_REMOVED: {
      const { id } = action
      const items = state.items.filter((item) => (item.id === id))
      return {...state, items}
    }

    case POSTS_FETCHED: {
      const { posts } = action
      const items = posts.filter((post) => !post.deleted)
      return {...state, items}
    }

    case POST_LOADED: {
      const { post } = action
      const comments = (action.comments && action.comments.filter((comment) => !comment.deleted)) || []
      return {...state, post, comments}
    }

    case COMMENT_ADDED: {
      const { comment } = action
      const comments = state.comments.concat(comment)
      return {...state, comments}
    }

    case COMMENT_UPDATED:
    case COMMENT_VOTED_UP:
    case COMMENT_VOTED_DOWN: {
      const { comment } = action
      const comments = state.comments.map((item) => {
        return (item.id === comment.id ? comment : item)
      })
      return {...state, comments}
    }

    case COMMENT_REMOVED: {
      const { id } = action
      const comments = state.comments.filter((item) => (item.id === id))
      return {...state, comments}
    }

    default :
      return state
  }
}

export default combineReducers({ posts })
