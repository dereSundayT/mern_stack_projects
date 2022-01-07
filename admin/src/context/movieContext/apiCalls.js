import axios from 'axios'
import {
	deleteMoviFailure,
	deleteMoviStart,
	deleteMoviSuccess,
	getMovieFailure,
	getMovieStart,
	getMovieSuccess,
} from './MovieActions'

export const getMovies = async (dispatch) => {
	dispatch(getMovieStart())
	try {
		const res = await axios.get('/movies', {
			headers: {
				token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
			},
		})
		dispatch(getMovieSuccess(res.data))
	} catch (error) {
		dispatch(getMovieFailure())
	}
}

//
export const deleteMovie = async (id, dispatch) => {
	dispatch(deleteMoviStart())
	try {
		await axios.delete('/movies/' + id, {
			headers: {
				token: 'Bearer ' + JSON.parse(localStorage.getItem('user')).accessToken,
			},
		})
		dispatch(deleteMoviSuccess(id))
	} catch (error) {
		dispatch(deleteMoviFailure())
	}
}
