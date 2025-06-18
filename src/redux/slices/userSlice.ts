import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { UserState } from "../types";



const initialState: UserState = {
    user: null,
    isAuthenticated: false,
};
const userSlice = createSlice({
    name: "toast",
    initialState,
    reducers: {
        setUser(state: UserState, action: PayloadAction<UserState>) {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        removeUser(
            state: UserState
        ) {
            state.user = null;
            state.isAuthenticated = false;
        },
    },
});
export const { setUser, removeUser } = userSlice.actions;
export const getUser = (state: RootState) => state.user;

export default userSlice.reducer;
