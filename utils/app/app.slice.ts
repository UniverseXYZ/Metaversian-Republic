import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
  showWrongNetwork: false,
  showError: false,
  showProcessingPopup: false,
  showSuccessfulPopup: false,
  showMintError: false,
  transactionHash: ""
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
    setShowProcessingPopup: (state, { payload }: PayloadAction<boolean>) => {
      state.showProcessingPopup = payload;
    },
    setShowSuccessfulPopup: (state, { payload }: PayloadAction<boolean>) => {
      state.showSuccessfulPopup = payload;
    },
    setShowMintError: (state, { payload }: PayloadAction<boolean>) => {
      state.showMintError = payload;
    },
    setTransactionHash: (state, { payload }: PayloadAction<string>) => {
      state.transactionHash = payload;
    }
  },
});

// actions
export const {
  setShowWrongNetwork,
  setShowError,
  setShowProcessingPopup,
  setShowSuccessfulPopup,
  setShowMintError,
  setTransactionHash
} = appSlice.actions;

//selectors
export const selectApp = (state: any) => state.app;
export const selectWrongNetwork = (state: any) => state.app.showWrongNetwork;
export const selectShowError = (state: any) => state.app.showError;
export const selectShowProcessingPopup = (state: any) => state.app.showProcessingPopup;
export const selectShowSuccessfulPopup = (state: any) => state.app.showSuccessfulPopup;
export const selectShowMintError = (state: any) => state.app.showMintError;
export const selectTransactionHash = (state: any) => state.app.transactionHash;

export default appSlice;
