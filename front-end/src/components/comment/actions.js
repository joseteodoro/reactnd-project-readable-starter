import {
  COMMENT_UPDATED,
  COMMENT_REMOVED,
  COMMENT_VOTED_UP,
  COMMENT_VOTED_DOWN,
  COMMENT_ADDED
} from './action-types'

export function addComment ({ parentId, body, author, id, timestamp }) {
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

export function updateComment ({ id, body, timestamp }) {
  return {
    type: COMMENT_UPDATED,
    comment: {
      id,
      timestamp,
      body
    }
  }
}

export function removeComment (id, parentId) {
  return {
    type: COMMENT_REMOVED,
    id,
    parentId
  }
}

export function commentVoteUp (comment) {
  const voteScore = comment.voteScore + 1
  const updated = {...comment, voteScore}
  return {
    type: COMMENT_VOTED_UP,
    comment: updated,
    vote: 'upVote'
  }
}

export function commentVoteDown (comment) {
  const voteScore = comment.voteScore - 1
  const updated = {...comment, voteScore}
  return {
    type: COMMENT_VOTED_DOWN,
    comment: updated,
    vote: 'downVote'
  }
}
