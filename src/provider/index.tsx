'use client';

import SubscriptionPurchasePopup from '@/components/ui/SubscriptionPurchasePopup';
import { store } from '@/redux/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import * as ReactRedux from 'react-redux';
import { Toaster } from 'sonner';

type TProvider = {
  children: React.ReactNode;
};

const queryClient = new QueryClient();

export default function Provider({ children }: TProvider) {
  return (
    <ReactRedux.Provider store={store}>
      <QueryClientProvider client={queryClient}>
        {children}
        <SubscriptionPurchasePopup />
        <Toaster />
      </QueryClientProvider>
    </ReactRedux.Provider>
  );
}
