import randomstring from 'randomstring'
import moment from 'moment'

export const SORT_POST = 'SORT_POST'

export function sortPosts (sortedBy) {
  return {
    type: SORT_POST,
    sortedBy
  }
}

export const POST_LOADED = 'POST_LOADED'

export function loadPost (id) {
  return {
    type: POST_LOADED,
    id,
    post: null,
    comments: []
  }
}

export const POST_ADDED = 'POST_ADDED'

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
  return {
    type: POST_ADDED,
    post
  }
}

export const POSTS_FETCHED_BY_CATEGORY = 'POSTS_FETCHED_BY_CATEGORY'

export function fetchPostsByCategory (category) {
  return {
    type: POSTS_FETCHED_BY_CATEGORY,
    category,
    sortedBy: {field: 'voteScore', order: 'desc'},
    posts: null
  }
}

export const POSTS_FETCHED = 'POSTS_FETCHED'

export function fetchPosts () {
  return {
    type: POSTS_FETCHED,
    sortedBy: {field: 'voteScore', order: 'desc'},
    posts: null
  }
}

export const POST_REMOVED = 'POST_REMOVED'

export function removePost (id) {
  return {
    type: POST_REMOVED,
    id
  }
}

export const POST_UPDATED = 'POST_UPDATED'

export function updatePost ({ id, title, body }) {
  const post = {
    id,
    title,
    body
  }
  return {
    type: POST_UPDATED,
    post
  }
}

export const POST_VOTED_UP = 'POST_VOTED_UP'

export function postVoteUp (post) {
  const voteScore = post.voteScore + 1
  const updated = {...post, voteScore}
  return {
    type: POST_VOTED_UP,
    vote: 'upVote',
    post: updated
  }
}

export const POST_VOTED_DOWN = 'POST_VOTED_DOWN'

export function postVoteDown (post) {
  const voteScore = post.voteScore - 1
  const updated = {...post, voteScore}
  return {
    type: POST_VOTED_DOWN,
    vote: 'downVote',
    post: updated
  }
}
