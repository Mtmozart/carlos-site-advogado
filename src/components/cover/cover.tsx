import styles from './cover.module.scss';
import { FaWhatsapp } from 'react-icons/fa';
export const Cover = () => {
  return (
    <section className={styles.cover__container}>
      <div className={styles.cover__content}>
        <h1>Carlos Pontes Advogado</h1>
        <h2>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, illo.
          Adipisci doloribus saepe nulla voluptatem eaque ratione. Ipsam odit
          ducimus expedita in necessitatibus numquam reprehenderit, enim totam
          vel dicta voluptatum?
        </h2>
        <a className={styles.call_to_action}>
          Contato <FaWhatsapp />
        </a>
      </div>
    </section>
  );
};
