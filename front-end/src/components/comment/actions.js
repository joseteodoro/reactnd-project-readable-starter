import randomstring from 'randomstring'
import moment from 'moment'

export const ADD_COMMENT = 'ADD_COMMENT'

export function addComment ({parentId, body, author}) {
  const id = randomstring.generate()
  const timestamp = moment().valueOf()
  return {
    type: ADD_COMMENT,
    comment: {
      id,
      parentId,
      timestamp,
      body,
      author,
      voteScore: 0,
      deleted: false,
      parentDeleted: false
    }
  }
}

export const UPDATE_COMMENT = 'UPDATE_COMMENT'

export function updateComment ({ id, body }) {
  const timestamp = moment().valueOf()
  return {
    type: UPDATE_COMMENT,
    comment: {
      id,
      timestamp,
      body
    }
  }
}

export const REMOVE_COMMENT = 'REMOVE_COMMENT'

export function removeComment ({id}) {
  return {
    type: REMOVE_COMMENT,
    id
  }
}

export const COMMENT_VOTE = 'COMMENT_VOTE'

export function commentVoteUp ({target, id}) {
  return {
    type: COMMENT_VOTE,
    comment: {
      id,
      vote: 'upVote',
      change: 1
    }
  }
}

export function commentVoteDown ({target, id}) {
  return {
    type: COMMENT_VOTE,
    comment: {
      id,
      vote: 'downVote',
      change: -1
    }
  }
}
