import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userInfo: []
};

export const userInfoSlice = createSlice({
    name: "userInfo",
    initialState: initialState,
    reducers: {
        setUserInfo: (state, action) => {
            state.userInfo = action.payload;
        },
    },
});

export const { setUserInfo } = userInfoSlice.actions;
export const userInfoReducer = userInfoSlice.reducer;



// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import  UserInfoModel  from "../../Interfaces/UserInfoModel";

// // Initial state
// const initialState: { userInfoItem: UserInfoModel[] } = {
//   userInfoItem: [],
// };

// // Redux Toolkit Slice
// export const userInfoSlice = createSlice({
//   name: "UserInfoItem",
//   initialState,
//   reducers: {
//     setUserInfo: (state, action: PayloadAction<UserInfoModel[]>) => {
//       state.userInfoItem = action.payload;
//     },
//   },
// });

// // Export actions and reducer
// export const { setUserInfo } = userInfoSlice.actions;
// export const userInfoItemReducer = userInfoSlice.reducer;

