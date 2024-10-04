'use client';

import { store } from '@/redux/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import * as ReactRedux from 'react-redux';

type TProvider = {
  children: React.ReactNode;
};

const queryClient = new QueryClient();

export default function Provider({ children }: TProvider) {
  
  return (
    <ReactRedux.Provider store={store}>
    <QueryClientProvider client={queryClient}>
          {children}

        </QueryClientProvider>

    </ReactRedux.Provider>
  );
}
