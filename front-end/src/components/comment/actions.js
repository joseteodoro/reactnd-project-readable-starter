import randomstring from 'randomstring'
import moment from 'moment'

export const COMMENT_UPDATED = 'COMMENT_UPDATED'
export const COMMENT_REMOVED = 'COMMENT_REMOVED'
export const COMMENT_VOTED_UP = 'COMMENT_VOTED_UP'
export const COMMENT_VOTED_DOWN = 'COMMENT_VOTED_DOWN'
export const COMMENT_ADDED = 'COMMENT_ADDED'

export function addComment ({parentId, body, author}) {
  const id = randomstring.generate()
  const timestamp = moment().valueOf()
  return {
    type: COMMENT_ADDED,
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

export function updateComment ({ id, body }) {
  const timestamp = moment().valueOf()
  return {
    type: COMMENT_UPDATED,
    comment: {
      id,
      timestamp,
      body
    }
  }
}

export function removeComment ({id}) {
  return {
    type: COMMENT_REMOVED,
    id
  }
}

export function commentVoteUp (comment) {
  return {
    type: COMMENT_VOTED_UP,
    comment: {
      comment,
      vote: 'upVote'
    }
  }
}

export function commentVoteDown (comment) {
  return {
    type: COMMENT_VOTED_DOWN,
    comment: {
      comment,
      vote: 'downVote'
    }
  }
}
