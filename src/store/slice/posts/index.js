import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../../api/index';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const { data } = await axios.get('/posts');
  return data;
});

export const fetchTags = createAsyncThunk('posts/fetchTags', async () => {
  const { data } = await axios.get('/tags');
  return data;
});

export const fetchRemovePost = createAsyncThunk('posts/fetchRemovePost', async (id) => {
  axios.delete(`/posts/${id}`);
});

const initialState = {
  posts: {
    items: [],
    stasus: 'loading',
  },
  tags: {
    items: [],
    stasus: 'loading',
  },
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {
    // Получение постов
    [fetchPosts.pending.toString()]: (state) => {
      state.posts.items = [];
      state.posts.stasus = 'loading';
    },
    [fetchPosts.fulfilled.toString()]: (state, action) => {
      state.posts.items = action.payload;
      state.posts.stasus = 'loaded';
    },
    [fetchPosts.rejected.toString()]: (state) => {
      state.posts.items = [];
      state.posts.stasus = 'error';
    },

    // Получение тэгов
    [fetchTags.pending.toString()]: (state) => {
      state.tags.items = [];
      state.tags.stasus = 'loading';
    },
    [fetchTags.fulfilled.toString()]: (state, action) => {
      state.tags.items = action.payload;
      state.tags.stasus = 'loaded';
    },
    [fetchTags.rejected.toString()]: (state) => {
      state.tags.items = [];
      state.tags.stasus = 'error';
    },

    // Удаление постов
    [fetchRemovePost.pending.toString()]: (state, action) => {
      state.posts.items = state.posts.items.filter((obj) => obj._id !== action.meta.arg);
    },
  },
});

export const postsReducer = postsSlice.reducer;
