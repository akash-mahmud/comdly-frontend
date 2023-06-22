import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { persistedState, saveState } from "../utils/persisted.store";
import { createWrapper } from 'next-redux-wrapper';
import authSlice from "./slices/auth/authSlice";
import  commonSlice  from "./slices/common/sidebar";
import serviceSlice from "./slices/service/serviceSlice";
import  topbarSlice  from "./slices/common/topbar";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    common: commonSlice,
    service: serviceSlice,
    topbap:topbarSlice
  },
  preloadedState: persistedState,
});
store.subscribe(() => {
  saveState(store.getState());
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const makeStore = () => store;
export const wrapper = createWrapper(makeStore);
