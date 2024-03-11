import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name: " movies",
    initialState : {
        nowPlaying : {},
        trailers : {},
    },
    reducers : {
        getMovies : (state,action) => {
            state.nowPlaying = action.payload;
        },
        addMovieTrailer : (state , action) => {
            state.trailers = action.payload;
        }
    }
})


export const {getMovies,addMovieTrailer} = moviesSlice.actions;
export default moviesSlice.reducer;