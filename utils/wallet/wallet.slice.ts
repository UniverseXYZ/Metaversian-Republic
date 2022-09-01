import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: any = {
  address: '',
  type: '',
  balance: '',
  polymorphsCount: 0,
  provider: {}
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
    },
    setBalance: (state, { payload }: PayloadAction<string>) => {
      state.balance = payload;
    },
    setPolymorphsCount: (state, { payload }: PayloadAction<string>) => {
      state.polymorphsCount = payload;
    },
  },
});

// actions
export const {
  setWalletAddress,
  setWalletType,
  setBalance,
  setPolymorphsCount,
} = walletSlice.actions;

//selectors
export const selectWallet = (state: any) => state.wallet;
export const selectWalletAddress = (state: any) => state.wallet.address;
export const selectWalletType = (state: any) => state.wallet.type;
export const selectBalance = (state: any) => state.wallet.balance;
export const selectPolymoprhsCount = (state: any) => state.wallet.polymorphsCount;
export const selectProvider = (state: any) => state.wallet.provider;

export default walletSlice;
