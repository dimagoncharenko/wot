import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { wargamingApi } from 'data/wargamingApi';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/exports';
import { TypedUseSelectorHook } from 'react-redux/es/types';
import generalSliceReducer from '../modules/general/generalSlice';
import { AppDispatch, RootState } from './types';

const store = configureStore({
  reducer: {
    general: generalSliceReducer,
    [wargamingApi.reducerPath]: wargamingApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(wargamingApi.middleware),
});

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
setupListeners(store.dispatch);
export default store;
