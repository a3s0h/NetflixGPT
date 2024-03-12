import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name: "movies",
    initialState : {
        nowPlaying : null,
        trailers : null,
        popular : null,
        topRated : null,
        upcoming : null,
    },
    reducers : {
        addNowPlayingMovies : (state,action) => {
            state.nowPlaying = action.payload;
        },
        addPopularMovies : (state,action) => {
            state.popular = action.payload;
        },
        addTopRatedMovies : (state,action) => {
            state.topRated = action.payload;
        },
        addUpcoming : (state,action) => {
            state.upcoming = action.payload;
        },
        addMovieTrailer : (state , action) => {
            state.trailers = action.payload;
        },
        
    }
})


export const {addNowPlayingMovies,addPopularMovies,addTopRatedMovies,addUpcoming,addMovieTrailer} = moviesSlice.actions;
export default moviesSlice.reducer;