import Image from 'next/image';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          // className={styles.logo}
          src="/guven8.svg"
          alt="guven8"
          width={331}
          height={122}
          priority
        />
      </div>
    </main>
  );
}
