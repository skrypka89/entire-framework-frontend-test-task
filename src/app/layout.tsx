import type { Metadata } from 'next';
import { IBM_Plex_Mono } from 'next/font/google';

import '@/styles/index.sass';

type PropsType = {
  children: React.ReactNode;
};

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

export default function RootLayout({ children }: PropsType) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
