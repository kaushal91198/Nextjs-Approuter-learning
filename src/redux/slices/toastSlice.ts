import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ToastInterface } from "../types";



const initialState: ToastInterface[] = [];

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    setToast(state: ToastInterface[], action: PayloadAction<ToastInterface>) {
      state.push({
        message: action.payload.message,
        // type: action.payload.type,
        id: action.payload.id,
      });
    },
    removeToast(
      state: ToastInterface[],
      action: PayloadAction<{ id: number }>
    ) {
      return state.filter((toast) => toast.id !== action.payload.id);
    },
  },
});
export const { setToast, removeToast } = toastSlice.actions;
export const getToast = (state: RootState) => state.toast;

export default toastSlice.reducer;
