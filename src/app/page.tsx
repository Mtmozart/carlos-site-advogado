import { Cover } from '@/components/cover/cover';
import styles from './styles.module.scss';
export default function Home() {
  return (
    <>
      <main className={styles.main_container}>
        <Cover />
      </main>
    </>
  );
}
