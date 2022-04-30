import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const updateUser = createAsyncThunk("users/update", async (user) => {
    const res = await axios.post("http://localhost:5000/api/users/1/update", user);
    return res.data;
})

export const userSlice = createSlice({
    name: "user",
    initialState: {
        userInfo: {
            name: "Anna",
            email: "anna@gmail.com"
        },
        pending: null,
        error: false,
    },
    reducers: {},
    extraReducers: {
        [updateUser.pending]: (state) => {
            state.pending = true;
            state.error = false;
        },
        [updateUser.fulfilled]: (state, action) => {
            state.pending = false;
            state.userInfo = action.payload;
        },
        [updateUser.rejected]: (state) => {
            state.pending = null;
            state.error = true;
        }
    }
});

export default userSlice.reducer;