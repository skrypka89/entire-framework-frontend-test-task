'use client';

import styles from '@/app/error.module.sass';

type Props = {
  error: Error;
  reset: () => void;
};

export default function Error({ reset }: Props) {
  return (
    <div className={styles.error}>
      <p>Something went wrong!</p>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
