import randomstring from 'randomstring'
import moment from 'moment'
import * as api from '../../client/API'

export const POST_ADDED = 'POST_ADDED'

export function postAdded (post) {
  return {
    type: POST_ADDED,
    post
  }
}

export function addPost ({ title, body, author, category }) {
  const id = randomstring.generate()
  const timestamp = moment().valueOf()
  const post = {
    id,
    timestamp,
    title,
    body,
    author,
    category,
    voteScore: 0,
    deleted: false,
    commentCount: 0
  }
  return function (dispatch) {
    api.addPost(post).then(res => dispatch(postAdded(post)))
  }
}

export const POST_UPDATED = 'POST_UPDATED'

export function postUpdated (post) {
  return {
    type: POST_UPDATED,
    post
  }
}

export function updatePost ({ id, title, body }) {
  const post = {
    id,
    title,
    body
  }
  return function (dispatch) {
    api.updatePost(post).then(post => dispatch(postUpdated(post)))
  }
}

export const POST_REMOVED = 'POST_REMOVED'

export function postRemoved (id) {
  return {
    type: POST_REMOVED,
    id
  }
}

export function removePost ({ id }) {
  return function (dispatch) {
    api.deletePost(id).then(res => dispatch(postRemoved(id)))
  }
}

export const POST_VOTED_UP = 'POST_VOTED_UP'

export function postVotedUp (post) {
  return {
    type: POST_VOTED_UP,
    post
  }
}

export function postVoteUp ({id}) {
  return function (dispatch) {
    api.votePost(id, 'upVote').then(post =>
      dispatch(postVotedUp(post))
    )
  }
}

export const POST_VOTED_DOWN = 'POST_VOTED_DOWN'

export function postVotedDown (post) {
  return {
    type: POST_VOTED_DOWN,
    post
  }
}

export function postVoteDown ({id}) {
  return function (dispatch) {
    api.votePost(id, 'downVote').then(post => dispatch(postVotedDown(post))
    )
  }
}

export const POSTS_FETCHED = 'POSTS_FETCHED'

export function postsFetched (posts) {
  return {
    type: POSTS_FETCHED,
    posts
  }
}

export function fetchPosts ({id}) {
  return function (dispatch) {
    api.getPosts().then(posts => {
      dispatch(postsFetched(posts))
    })
  }
}
