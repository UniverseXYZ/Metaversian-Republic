import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
  showWrongNetwork: false,
  showError: false
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setShowWrongNetwork: (state, { payload }: PayloadAction<boolean>) => {
      state.showWrongNetwork = payload;
    },
    setShowError: (state, { payload }: PayloadAction<boolean>) => {
      state.showError = payload;
    },
  },
});

// actions
export const {
  setShowWrongNetwork,
  setShowError
} = appSlice.actions;

//selectors
export const selectWrongNetwork = (state: any) => state.app.showWrongNetwork;
export const selectShowError = (state: any) => state.app.showError;

export default appSlice;
