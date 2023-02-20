export const getRefreshing = state => state.auth.isRefreshing
export const getFavorites = state => state.auth.user.favorites
export const getIsLoggedIn = state => state.auth.isLoggedIn
export const getUserId = state => state.auth.user._id