import randomstring from 'randomstring'
import moment from 'moment'

export const SORT_POSTS = 'SORT_POSTS'

export function sortPosts ({ field, kind }) {
  return {
    type: SORT_POSTS,
    field,
    kind
  }
}

export const ADD_POST = 'ADD_POST'

export function addPost ({ title, body, author, category }) {
  const id = randomstring.generate()
  const timestamp = moment().valueOf()
  return {
    type: ADD_POST,
    post: {
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
  }
}

export const UPDATE_POST = 'UPDATE_POST'

export function updatePost ({ id, title, body }) {
  return {
    type: UPDATE_POST,
    post: {
      id,
      title,
      body
    }
  }
}

export const REMOVE_POST = 'REMOVE_POST'

// TODO remove all comments when calling remove post
export function removePost ({id}) {
  return {
    type: REMOVE_POST,
    id
  }
}

export const POST_VOTE = 'POST_VOTE'

export function postVoteUp ({id}) {
  return {
    type: POST_VOTE,
    post: {
      id,
      vote: 'upVote',
      change: 1
    }
  }
}

export function postVoteDown ({id}) {
  return {
    type: POST_VOTE,
    post: {
      id,
      vote: 'downVote',
      change: -1
    }
  }
}
