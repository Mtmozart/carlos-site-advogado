import styles from './logo.module.scss';
export default function Logo() {
  return (
    <section className={styles.image__container}>
      <img
        src="/assets/logo.png"
        alt="Carlos Pontes Advocacia e Consultoria"
        className={styles.logo}
      />
    </section>
  );
}
