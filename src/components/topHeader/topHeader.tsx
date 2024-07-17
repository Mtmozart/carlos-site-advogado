import styles from './topHeader.module.scss';
import { FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

export const TopHeader = () => {
  return (
    <section className={styles.section__top__header}>
      <p>
        <FaWhatsapp size={17} /> (69) 99348-8222
      </p>
      <p>
        <FaMapMarkerAlt size={17} /> Av. Lauro Sodré, 1903, Pedrinhas, Porto
        Velho - RO.
      </p>
    </section>
  );
};
