import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../../api/index';

export const fetchAuth = createAsyncThunk('auth/fetchUserData', async (params) => {
  const { data } = await axios.post('/auth/login', params);
  return data;
});

export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async () => {
  const { data } = await axios.get('/auth/me');
  return data;
});

export const fetchRegister = createAsyncThunk('auth/fetchRegister', async (params) => {
  const { data } = await axios.post('/auth/register', params);
  return data;
});

const initialState = {
  data: null,
  status: 'loading',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearUserData() {
      return { ...initialState };
    },
  },
  extraReducers: {
    [fetchAuth.pending.toString()]: (state) => {
      state.status = 'loading';
      state.data = null;
    },
    [fetchAuth.fulfilled.toString()]: (state, action) => {
      state.status = 'loaded';
      state.data = action.payload;
    },
    [fetchAuth.rejected.toString()]: (state) => {
      state.status = 'error';
      state.data = null;
    },
    [fetchAuthMe.pending.toString()]: (state) => {
      state.status = 'loading';
      state.data = null;
    },
    [fetchAuthMe.fulfilled.toString()]: (state, action) => {
      state.status = 'loaded';
      state.data = action.payload;
    },
    [fetchAuthMe.rejected.toString()]: (state) => {
      state.status = 'error';
      state.data = null;
    },
    [fetchRegister.pending.toString()]: (state) => {
      state.status = 'loading';
      state.data = null;
    },
    [fetchRegister.fulfilled.toString()]: (state, action) => {
      state.status = 'loaded';
      state.data = action.payload;
    },
    [fetchRegister.rejected.toString()]: (state) => {
      state.status = 'error';
      state.data = null;
    },
  },
});

export const { clearUserData } = authSlice.actions;

export const selectIsAuth = (state: any) => Boolean(state.auth.data);

export const authReducer = authSlice.reducer;
