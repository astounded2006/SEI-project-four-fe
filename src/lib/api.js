import axios from 'axios'
import { getToken } from './auth'

const baseUrl = '/api'

function headers() {
  return {
    headers: { Authorization: `Bearer ${getToken()}` },
  }
}

// * Venue Request

export function getAllVenues() {
  return axios.get(`${baseUrl}/venues`)
}

export function getSingleVenue(venueId) {
  return axios.get(`${baseUrl}/venues/${venueId}`)
}

export function toggleFavourite(venueId) {
  return axios.post(`${baseUrl}/venues/${venueId}`, venueId, headers())
}

// * Profile Request

// make a function for getting profile information
export function getProfileInfo(userId) {
  console.log(userId)
  return axios.get(`${baseUrl}/profile/${userId}`)
}

// WRITE AN API CALL HERE - get request - check router.js in the backend to make sure you have the right route and args
// get request, getFavourites, the path is '/profile/:userId/favourites', pass the userId variable
export function getFavourites(userId) {
  console.log(userId)
  return axios.get(`${baseUrl}/profile/${userId}/favourites`, headers()) // added userId as an argument, add headers() here
}

// * Auth Requests

export function registerUser(formdata) {
  console.log(formdata) // test
  return axios.post(`${baseUrl}/register`, formdata)
}

export function loginUser(formdata) {
  // console log formdata here (test)
  return axios.post(`${baseUrl}/login`, formdata)
}
export function createVenueComment(venueId, formData) {
  return axios.post(`${baseUrl}/venues/${venueId}/comments`, formData, headers())
}
export function deleteVenueComment(venueId, commentId) {
  return axios.delete(`${baseUrl}/venues/${venueId}/comments/${commentId}`, headers())
}