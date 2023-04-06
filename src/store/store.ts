import { configureStore } from '@reduxjs/toolkit';
import { userSliceName, userSliceReducer } from './slice/users'

export const store = configureStore({
  reducer: {
    [userSliceName]: userSliceReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

