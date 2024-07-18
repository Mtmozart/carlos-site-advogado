import Link from 'next/link';
import styles from './navigation.module.scss';
export const Navigation = () => {
  return (
    <nav className={styles.navigation__container}>
      <ul className={styles.navigation__list}>
        <Link href="/" className={styles.navigation__list__item}>
          Home
        </Link>
        <Link href="/about" className={styles.navigation__list__item}>
          Sobre
        </Link>
        <Link href="/blog" className={styles.navigation__list__item}>
          Blog
        </Link>
        <Link href="/contact" className={styles.navigation__list__item}>
          Contato
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
