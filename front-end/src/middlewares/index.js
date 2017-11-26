import * as api from '../client/API'
import {
  // POSTS_FETCHED,
  // POST_UPDATED,
  // POST_REMOVED,
  // POST_VOTED_UP,
  // POST_VOTED_DOWN,
  POST_ADDED
} from '../components/post/actions'

export function log (store) {
  return (next) => (action) => {
    console.group(action.type)
    console.info('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    console.groupEnd(action.type)
    return result
  }
}

export function posts (store) {
  return (next) => (action) => {
    switch (action.type) {
      case POST_ADDED: {
        const {post} = action
        api.addPost(post).then(res => {
          return next(action)
        })
        break
      }

      // case POST_VOTED_UP:
      // case POST_VOTED_DOWN:
      // case POST_UPDATED: {
      // }
      //
      // case POST_REMOVED: {
      // }
      //
      // case POSTS_FETCHED: {
      // }

      default :
        return next(action)
    }
  }
}
