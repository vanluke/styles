export const selectReducer = state => state.tripsList;
export const selectIsLoading = state => selectReducer(state).isLoading;
export const selectTrips = state => selectReducer(state).trips;
