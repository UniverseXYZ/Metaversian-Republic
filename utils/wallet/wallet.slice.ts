import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
  address: '',
  type: ''
};

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    setWalletAddress: (state, { payload }: PayloadAction<string>) => {
      state.address = payload;
    },
    setWalletType: (state, { payload }: PayloadAction<string>) => {
      state.type = payload;
    }
  },
});

// actions
export const {
  setWalletAddress,
  setWalletType
} = walletSlice.actions;

//selectors
export const selectWallet = (state: any) => state.wallet;
export const selectWalletAddress = (state: any) => state.wallet.address;
export const selectWalletType = (state: any) => state.wallet.type;

export default walletSlice;
