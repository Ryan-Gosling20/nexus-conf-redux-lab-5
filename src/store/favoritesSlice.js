import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  speakerIds: [],
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite(state, action) {
      const speakerId = action.payload
      const index = state.speakerIds.indexOf(speakerId)

      if (index === -1) {
        state.speakerIds.push(speakerId)
      } else {
        state.speakerIds.splice(index, 1)
      }
    },
    clearFavorites(state) {
      state.speakerIds = []
    },
  },
})

export const { toggleFavorite, clearFavorites } = favoritesSlice.actions
export const selectFavoriteIds = (state) => state.favorites.speakerIds
export const selectFavoritesCount = (state) => state.favorites.speakerIds.length
export default favoritesSlice.reducer
