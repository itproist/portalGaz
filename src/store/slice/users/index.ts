import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  login: '',
  password: '',
  token: '',
  loading: false,
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUserData(
      state,
      { payload: { login, password, token } }: PayloadAction<{ login: string; password: string, token: string }>,
    ) {
      return { ...state, login, password, token };
    },

    setUserLoading(state, { payload }: PayloadAction<boolean>) {
      return { ...state, loading: payload };
    },
  },
});

export const {
  name: userSliceName,
  reducer: userSliceReducer,
  actions: UserSliceActions,
} = userSlice;
