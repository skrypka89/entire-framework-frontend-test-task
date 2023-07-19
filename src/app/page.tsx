import { Suspense } from 'react';

import styles from '@/app/page.module.sass';
import fetchData from '@/utils/fetchData';

export default async function Home() {
  const data = await fetchData();
  console.log(data);

  return (
    <main className={styles.main}>
      <Suspense fallback={<p>Loading...</p>}>Data have been fetched</Suspense>
    </main>
  );
}
