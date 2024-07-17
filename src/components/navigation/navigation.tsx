import styles from './navigation.module.scss';
export const Navigation = () => {
  return (
    <nav className={styles.navigation__container}>
      <ul className={styles.navigation__list}>
        <li className={styles.navigation__list__item}>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">Sobre</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="/contact">Contato</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
