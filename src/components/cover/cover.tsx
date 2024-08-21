import styles from './cover.module.scss';
import { FaWhatsapp } from 'react-icons/fa';
export const Cover = () => {
  return (
    <section className={styles.cover__container}>
      <div className={styles.cover__content}>
        <h1>Carlos Pontes Advocacia e Consultoria Jurídica</h1>
        <p>
          Com sólida formação em Direito do Trabalho, ofereço assessoria
          jurídica especializada para a defesa dos direitos trabalhistas e
          previdenciários. Comprometido com ética e transparência, também atuo
          na área de Justiça Racial, prestando suporte a pessoas negras em
          procedimentos de heteroidentificação.
        </p>
        <a
          className={styles.call_to_action}
          href="https://wa.me/5569993488222"
          target="_blank"
          rel="noreferrer"
        >
          Contato <FaWhatsapp />
        </a>
      </div>
    </section>
  );
};
