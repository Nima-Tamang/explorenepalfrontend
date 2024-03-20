import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    destinationItem: []
};

export const destinationSlice = createSlice({
    name: "DestinationItem",
    initialState: initialState,
    reducers: {
        setDestinationItem: (state, action) => {
            state.destinationItem = action.payload;
        },
    },
});

export const { setDestinationItem } = destinationSlice.actions;
export const destinationItemReducer = destinationSlice.reducer;
