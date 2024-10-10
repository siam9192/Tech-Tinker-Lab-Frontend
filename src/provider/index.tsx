'use client';

import SubscriptionPurchasePopup from '@/components/ui/SubscriptionPurchasePopup';
import { store } from '@/redux/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import * as ReactRedux from 'react-redux';
import { Toaster } from 'sonner';

type TProvider = {
  children: React.ReactNode;
};

const queryClient = new QueryClient();

export default function Provider({ children }: TProvider) {
  useEffect(() => {
    const modes = ['light','night']
    let mode = localStorage.getItem('mode');
   
    if (!mode) {
      localStorage.setItem('mode', 'light');
    }
    mode = localStorage.getItem('mode');
  
    if (!modes.includes(mode!)) {
      localStorage.setItem('mode', 'light');
    }

    if (mode === 'night') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);
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
