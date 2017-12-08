import randomstring from 'randomstring'
import moment from 'moment'
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
} from './action-types'

export function sortPosts (sortedBy) {
  return {
    type: SORT_POST,
    sortedBy
  }
}

export function loadPost (id) {
  return {
    type: POST_LOADED,
    id,
    post: null,
    comments: []
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
  return {
    type: POST_ADDED,
    post
  }
}

export function fetchPostsByCategory (category) {
  return {
    type: POSTS_FETCHED_BY_CATEGORY,
    category,
    sortedBy: {field: 'voteScore', order: 'desc'},
    posts: null
  }
}

export function fetchPosts () {
  return {
    type: POSTS_FETCHED,
    sortedBy: {field: 'voteScore', order: 'desc'},
    posts: null
  }
}

export function removePost (id) {
  return {
    type: POST_REMOVED,
    id
  }
}

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

export function postVoteUp (post) {
  const voteScore = post.voteScore + 1
  const updated = {...post, voteScore}
  return {
    type: POST_VOTED_UP,
    vote: 'upVote',
    post: updated
  }
}

export function postVoteDown (post) {
  const voteScore = post.voteScore - 1
  const updated = {...post, voteScore}
  return {
    type: POST_VOTED_DOWN,
    vote: 'downVote',
    post: updated
  }
}
