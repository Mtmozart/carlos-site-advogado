import styles from './topHeader.module.scss';
import { FaInstagram, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

export const TopHeader = () => {
  return (
    <section className={styles.section__top__header}>
      <div className={styles.section__top__item}>
        <a href="https://wa.me/5569993488222" target="_blank" rel="noreferrer">
          <FaWhatsapp size={17} /> (69) 99348-8222
        </a>
        <a
          href="https://www.instagram.com/advcarlospontes/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram size={17} />
          @advcarlospontes
        </a>
      </div>
      <div className={styles.section__top__item}>
        <a
          href="https://www.google.com/maps/search/?api=1&query=Lemos+Advocacia+Empresarial+e+Tributária,Av.+Lauro+Sodré,+1903,+Pedrinhas,+Porto+Velho+-+RO
"
        >
          <FaMapMarkerAlt size={17} /> Av. Lauro Sodré, 1903, Pedrinhas, Porto
          Velho - RO.
        </a>
      </div>
    </section>
  );
};
