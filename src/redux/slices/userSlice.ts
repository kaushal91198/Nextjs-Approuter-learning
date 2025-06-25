import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { UserState } from "../types";



const initialState: UserState = {
    user: null,
    isAuthenticated: false,
    redirectUrl: '/login',
};
const userSlice = createSlice({
    name: "toast",
    initialState,
    reducers: {
        setUser(state: UserState, action: PayloadAction<UserState>) {
            state.user = action.payload.user;
            state.isAuthenticated = true;
        },
        setRedirectLink(state: UserState, action: PayloadAction<string>) {
            state.redirectUrl = action.payload;
        },
        removeUser(
            state: UserState
        ) {
            state.user = null;
            state.isAuthenticated = false;
            state.redirectUrl = '/login'
        },
    },
});
export const { setUser, removeUser, setRedirectLink } = userSlice.actions;
export const getUser = (state: RootState) => state.user;

export default userSlice.reducer;
