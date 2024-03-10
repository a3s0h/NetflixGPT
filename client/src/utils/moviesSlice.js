import { createSlice } from "@reduxjs/toolkit";


const moviesSlice = createSlice({
    name: " movies",
    initialState : {
        nowPlaying : {}
    },
    reducers : {
        getMovies : (state,action) => {
            state.nowPlaying = action.payload;
        }
    }
})


export const {getMovies} = moviesSlice.actions;
export default moviesSlice.reducer;