import { combineReducers } from 'redux'

import {
  POST_ADDED,
  POST_UPDATED,
  POST_REMOVED,
  POST_VOTED_UP,
  POST_VOTED_DOWN,
  POSTS_FETCHED,
  POSTS_FETCHED_BY_CATEGORY,
  POST_LOADED,
  SORT_POST
} from '../components/post/action-types'
import {
  COMMENT_UPDATED,
  COMMENT_REMOVED,
  COMMENT_VOTED_UP,
  COMMENT_VOTED_DOWN,
  COMMENT_ADDED
} from '../components/comment/action-types'
import {
  LOAD_CATEGORIES
} from '../components/categories/action-types'

function posts (state = {items: [], comments: []}, action) {
  switch (action.type) {
    case LOAD_CATEGORIES: {
      const { categories } = action
      return {...state, categories}
    }

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
      const items = state.items.filter((item) => (item.id !== id))
      return {...state, items, post: {deleted: true, id}}
    }

    case POSTS_FETCHED_BY_CATEGORY:
    case POSTS_FETCHED: {
      const { posts, sortedBy } = action
      const items = posts.filter((post) => !post.deleted)
      if (sortedBy.order === 'asc') {
        return {...state, sortedBy, items: items.sort((left, right) => left[sortedBy.field] - right[sortedBy.field])}
      } else {
        return {...state, sortedBy, items: items.sort((left, right) => right[sortedBy.field] - left[sortedBy.field])}
      }
    }

    case SORT_POST: {
      const { sortedBy } = action
      if (sortedBy.order === 'asc') {
        return {...state, sortedBy, items: state.items.sort((left, right) => left[sortedBy.field] - right[sortedBy.field])}
      } else {
        return {...state, sortedBy, items: state.items.sort((left, right) => right[sortedBy.field] - left[sortedBy.field])}
      }
    }

    case POST_LOADED: {
      const { post } = action
      const comments = (action.comments && action.comments.filter((comment) => !comment.deleted)) || []
      return {...state, post, comments}
    }

    case COMMENT_ADDED: {
      const { comment, parentId } = action
      const comments = state.comments.concat(comment)
      const post = state.post
      post.commentCount = post.commentCount + 1
      const items = state.items.map((item) => {
        if (item.id === parentId) {
          return post
        }
        return item
      })
      return {...state, items, comments, post}
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
      const { id, parentId } = action
      const comments = state.comments.filter((item) => (item.id !== id))
      const post = state.post
      post.commentCount = post.commentCount - 1
      const items = state.items.map((item) => {
        if (item.id === parentId) {
          return post
        }
        return item
      })
      return {...state, items, comments, post}
    }

    default :
      return state
  }
}

export default combineReducers({ posts })
