import styles from './companyIdentity.module.scss';
import { FaBullseye, FaEye, FaHandshake } from 'react-icons/fa';

export const CompanyIdentity = () => {
  return (
    <section className={styles.companyIdentity__container}>
      <div className={styles.companyIdentity__container__item}>
        <FaBullseye />
        <h4>Misão</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque hic
          commodi qui eos, soluta nemo eaque nam culpa, perspiciatis quos, vitae
          facilis accusamus asperiores error delectus atque cupiditate aut
          officia!
        </p>
      </div>
      <div className={styles.companyIdentity__container__item}>
        <FaEye />
        <h4>Visão</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque hic
          commodi qui eos, soluta nemo eaque nam culpa, perspiciatis quos, vitae
          facilis accusamus asperiores error delectus atque cupiditate aut
          officia!
        </p>
      </div>
      <div className={styles.companyIdentity__container__item}>
        <FaHandshake />
        <h4>Valores</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque hic
          commodi qui eos, soluta nemo eaque nam culpa, perspiciatis quos, vitae
          facilis accusamus asperiores error delectus atque cupiditate aut
          officia!
        </p>
      </div>
    </section>
  );
};
