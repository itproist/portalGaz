import { RootState } from "../../store";

export const getUserLogin = (state: RootState) => state.userSlice.login;
export const getUserLoading = (state: RootState) => state.userSlice.loading;
export const getUserPassword = (state: RootState) => state.userSlice.password;
export const getUserToken = (state: RootState) => state.userSlice.token;

