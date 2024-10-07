import { createSlice } from '@reduxjs/toolkit';

interface IToggleSlice {
  isLoadingLineOpen: boolean;
  isSubscriptionPurchaseModalOpen: boolean;
}

const initialState: IToggleSlice = {
  isLoadingLineOpen: false,
  isSubscriptionPurchaseModalOpen: false,
};

const toggleSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    toggleLoadingLineComponent: (state, { payload }) => {
      state.isLoadingLineOpen = payload;
    },
    toggleSubscriptionPurchaseModal: (state, { payload }) => {
      state.isSubscriptionPurchaseModalOpen = payload;
    },
  },
});

export const { toggleLoadingLineComponent, toggleSubscriptionPurchaseModal } =
  toggleSlice.actions;

export default toggleSlice.reducer;
