import type { Metadata } from 'next';
import { IBM_Plex_Mono } from 'next/font/google';

import '@/styles/index.sass';
import { LayoutPropsType } from '@/types/types';

const font = IBM_Plex_Mono({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Menu Items',
  description: 'A test task from Entire Framework company',
};

export default function RootLayout({ children }: LayoutPropsType) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
