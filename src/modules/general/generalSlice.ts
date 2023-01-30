import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Projects, Regions } from './constants';

interface GeneralSlice {
  project: Projects;
  region: Regions;
  language: string;
}

const initialState: GeneralSlice = {
  project: Projects.WOT,
  region: Regions.EU,
  language: 'en',
};

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setProject: (state, action: PayloadAction<Projects>) => {
      state.project = action.payload;
    },
    setRegion: (state, action: PayloadAction<Regions>) => {
      state.region = action.payload;
    },
    setLanguage: (state, action: PayloadAction<Regions>) => {
      state.region = action.payload;
    },
  },
});

export const actions = generalSlice.actions;
export default generalSlice.reducer;
