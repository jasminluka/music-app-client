import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:5000',
})

export const loginUser = (user) => API.post('/auth/login', user)

export const searchSongs = (searchWord) =>
  API.get(`/music/search?query=${searchWord}`)

export const getAllUsers = () => API.get('/users')

export const getUserById = (userId) => API.get(`/users/${userId}`)

export const addUser = (user) => API.post('/users', user)

export const updateUser = (userId, newUser) =>
  API.patch(`/users/${userId}`, newUser)

export const deleteUser = (userId) => API.delete(`/users/${userId}`)

export const getAllFavorites = () => API.get('/favorites')

export const getAllFavoritesForUser = (userId) =>
  API.get(`/favorites/users/${userId}`)

export const addToFavorites = (userId, song) =>
  API.post(`/favorites/users/${userId}`, song)

export const getFavoriteById = (favoriteId) =>
  API.get(`/favorites/${favoriteId}`)

export const updateFavorite = (favoriteId, newFavorite) =>
  API.patch(`/favorites/${favoriteId}`, newFavorite)

export const deleteFavorite = (favoriteId) =>
  API.delete(`/favorites/${favoriteId}`)
