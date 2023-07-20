'use client';

import Context, { contextObject } from '@/app/(layout)/Context';
import styles from '@/app/(layout)/layout.module.sass';
import { LayoutPropsType } from '@/types/types';

export default function Layout({ children }: LayoutPropsType) {
  return (
    <main className={styles.main}>
      <Context.Provider value={contextObject}>{children}</Context.Provider>
    </main>
  );
}
