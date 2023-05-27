import { configureStore } from '@reduxjs/toolkit'
import CanvasImgSlice from '../slices/CanvasImgSlice';

export const store = configureStore({
  reducer: {
    CanvasImgSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;