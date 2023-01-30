import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'store';

const localSelector = (state: RootState) => state.general;

export const project = createSelector(localSelector, (state) => state.project);
export const region = createSelector(localSelector, (state) => state.region);
