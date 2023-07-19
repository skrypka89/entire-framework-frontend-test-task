import { Suspense } from 'react';

import styles from '@/app/[[...menuItem]]/page.module.sass';
import MenuItems from '@/components/MenuItems/MenuItems';
import fetchData from '@/utils/fetchData';

export default async function Home() {
  const data = await fetchData();

  return (
    <main className={styles.main}>
      <Suspense fallback={<p>Loading...</p>}>
        <MenuItems data={data} />
      </Suspense>
    </main>
  );
}
