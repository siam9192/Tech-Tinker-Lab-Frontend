import { ReactNode } from 'react';
import { IconType } from 'react-icons';
import { PageProps } from '../../.next/types/app/layout';

export type IRoute = {
  title?: string;
  href: string;
  icon: IconType;
};

export interface ILayoutProps  {
  children: ReactNode;
}

export type TRole = 'USER' | 'MODERATOR' | 'ADMIN';
