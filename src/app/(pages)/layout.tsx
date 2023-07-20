'use client';

import Context, { contextObject } from '@/app/(pages)/Context';
import styles from '@/app/(pages)/layout.module.sass';
import { LayoutPropsType } from '@/types/types';

export default function Layout({ children }: LayoutPropsType) {
  return (
    <main className={styles.main}>
      <Context.Provider value={contextObject}>{children}</Context.Provider>
    </main>
  );
}
