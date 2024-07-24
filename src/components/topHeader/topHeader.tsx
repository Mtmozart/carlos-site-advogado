import styles from './topHeader.module.scss';
import { FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

export const TopHeader = () => {
  return (
    <section className={styles.section__top__header}>
      <a href="https://wa.me/5569993488222">
        <FaWhatsapp size={17} /> (69) 99348-8222
      </a>
      <a
        href="https://www.google.com/maps/search/?api=1&query=Lemos+Advocacia+Empresarial+e+Tributária,Av.+Lauro+Sodré,+1903,+Pedrinhas,+Porto+Velho+-+RO
"
      >
        <FaMapMarkerAlt size={17} /> Av. Lauro Sodré, 1903, Pedrinhas, Porto
        Velho - RO.
      </a>
    </section>
  );
};
