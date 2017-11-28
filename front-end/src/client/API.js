import randomstring from 'randomstring'

const apiServerAddress = 'http://localhost:3001'

const token = localStorage.token || randomstring.generate()
if (!token) {
  localStorage.token = token
}

const headers = {
  Accept: 'application/json',
  Authorization: token
}

export function getPostsByCategory (category) {
  return fetch(`${apiServerAddress}/${category}/posts/`, { headers })
    .then(res => res.json())
}

export function getCategories () {
  return fetch(`${apiServerAddress}/categories`, { headers })
    .then(res => res.json())
}

export function getPosts () {
  return fetch(`${apiServerAddress}/posts`, { headers })
    .then(res => res.json())
}

export function getPostById (postId) {
  return fetch(`${apiServerAddress}/posts/${postId}`, { headers })
    .then(res => res.json())
}

export function addPost (post) {
  return fetch(`${apiServerAddress}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  }).then(res => res.json())
}

export function votePost (postId, vote) {
  return fetch(`${apiServerAddress}/posts/${postId}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option: vote })
  }).then(res => {
    return res.json()
  })
}

export function updatePost (post) {
  return fetch(`${apiServerAddress}/posts/${post.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title: post.title, body: post.body })
  }).then(res => res.json())
}

export function deletePost (id) {
  return fetch(`${apiServerAddress}/posts/${id}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
}

export function getCommentsByPost (id) {
  return fetch(`${apiServerAddress}/posts/${id}/comments`, { headers })
    .then(res => res.json())
}

export function addComment (comment) {
  return fetch(`${apiServerAddress}/comments`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
  }).then(res => res.json())
}

export function voteComment (commentId, vote) {
  console.log(commentId, vote)
  return fetch(`${apiServerAddress}/comments/${commentId}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ option: vote })
  }).then(res => res.json())
}

export function updateComment (comment) {
  return fetch(`${apiServerAddress}/comments/${comment.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ timestamp: comment.timestamp, body: comment.body })
  }).then(res => res.json())
}

export function deleteComment (id) {
  return fetch(`${apiServerAddress}/comments/${id}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
}
