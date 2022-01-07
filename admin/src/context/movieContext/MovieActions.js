export const getMovieStart = () => ({
	type: 'GET_MOVIES_START',
})

export const getMovieSuccess = (movies) => ({
	type: 'GET_MOVIES_SUCCESS',
	payload: movies,
})

export const getMovieFailure = () => ({
	type: 'GET_MOVIES_FAILURE',
})

//
export const deleteMoviStart = () => ({
	type: 'DELETE_MOVIE_START',
})

export const deleteMoviSuccess = (id) => ({
	type: 'DELETE_MOVIE_SUCCESS',
	payload: id,
})

export const deleteMoviFailure = () => ({
	type: 'DELETE_MOVIE_FAILURE',
})
