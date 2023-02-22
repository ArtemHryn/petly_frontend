//notices
export const getNotices = state => state.notices.notices;
export const getNoticeError = state => state.notices.error;

//filter
export const getSearch = state => state.filter.search;
export const getCategory = state => state.filter.category;

//owner
export const selectOwnerInfo = state => state.notices.cardOwner
