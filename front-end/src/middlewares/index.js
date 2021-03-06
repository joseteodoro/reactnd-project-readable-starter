import * as api from '../client/API'
import {
  POSTS_FETCHED,
  POSTS_FETCHED_BY_CATEGORY,
  POST_UPDATED,
  POST_REMOVED,
  POST_VOTED_UP,
  POST_VOTED_DOWN,
  POST_ADDED,
  POST_LOADED
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

export function posts (store) {
  return (next) => (action) => {
    switch (action.type) {
      case LOAD_CATEGORIES: {
        api.getCategories().then(result => {
          action.categories = result.categories
          return next(action)
        })
        break
      }

      case POST_ADDED: {
        const {post} = action
        api.addPost(post).then(res => next(action))
        break
      }

      case POST_VOTED_UP:
      case POST_VOTED_DOWN: {
        const { post } = action
        const { vote } = action
        api.votePost(post.id, vote).then(res => next(action))
        break
      }

      case POST_UPDATED: {
        const {post} = action
        api.updatePost(post).then(res => next(action))
        break
      }

      case POST_REMOVED: {
        const { id } = action
        api.deletePost(id).then(res => next(action))
        break
      }

      case POSTS_FETCHED: {
        api.getPosts().then(posts => {
          action.posts = posts
          return next(action)
        })
        break
      }

      case POSTS_FETCHED_BY_CATEGORY: {
        const { category } = action
        api.getPostsByCategory(category).then(posts => {
          action.posts = posts
          return next(action)
        })
        break
      }

      case POST_LOADED: {
        const { id } = action
        api.getPostById(id)
          .then((post) => {
            if (!post || !Object.keys(post).length) {
              action.post = {deleted: true, id}
              action.comments = []
            } else {
              action.post = post
            }
          })
          .then(() => api.getCommentsByPost(id))
          .then((comments) => {
            action.comments = comments
            return next(action)
          })
        break
      }

      case COMMENT_ADDED: {
        const {comment} = action
        api.addComment(comment).then(res => next(action))
        break
      }

      case COMMENT_VOTED_UP:
      case COMMENT_VOTED_DOWN: {
        const { comment } = action
        const { vote } = action
        api.voteComment(comment.id, vote).then(res => next(action))
        break
      }

      case COMMENT_UPDATED: {
        const {comment} = action
        api.updateComment(comment).then(res => next(action))
        break
      }

      case COMMENT_REMOVED: {
        const { id } = action
        api.deleteComment(id).then(res => next(action))
        break
      }

      default :
        return next(action)
    }
  }
}
