export function setToken(token) {
  window.localStorage.setItem('token', token)
}

export function getToken() {
  return window.localStorage.getItem('token')
}

export function removeToken() {
  window.localStorage.removeItem('token')
}

function getPayload() {
  const token = getToken()
  if (!token) return false
  const parts = token.split('.')
  if (parts.length < 3) return false
  return JSON.parse(atob(parts[1]))
}

export function isAuthenticated() {
  const payload = getPayload()
  if (!payload) return false
  const now = Math.round(Date.now() / 1000)
  return now < payload.exp
}

export function setId(userId) {
  window.localStorage.setItem('userId', userId)
}

export function getId() {
  return window.localStorage.getItem('userId')
}

export function removeId() {
  window.localStorage.removeItem('userId')
}

// test, no longer needed
export function getPayloadSub() {
  const token = getToken()
  const parts = token.split('.')
  // return typeof(parts)
  return parts[0]
  // return JSON.parse(atob(parts[0]))
  // return typeof(token)
}

export function isOwner(userId) {
  const payload = getPayload()
  if (!payload) return false
  return userId === payload.sub
}