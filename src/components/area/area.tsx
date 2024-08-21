import styles from './area.module.scss';
import { FaBalanceScale } from 'react-icons/fa';
import { FaGavel } from 'react-icons/fa';

export const Area = () => {
  return (
    <section className={styles.area__container}>
      <div className={styles.title__area_of_expansive}>
        <h3>Áreas de atuação</h3>
      </div>
      <div className={styles.area_of_expansive}>
        <article>
          <FaBalanceScale style={{ color: '#cc9933' }} />
          <h5>Direito trabalhista</h5>
          <p>
            Foco na proteção dos direitos dos trabalhadores, desde a contratação
            até a rescisão, incluindo questões de salários, horas extras,
            férias, e outros direitos trabalhistas.
          </p>
        </article>
        <article>
          <FaGavel style={{ color: '#cc9933' }} />
          <h5> Direito civil</h5>
          <p>
            Abrangência de questões como contratos, responsabilidade civil,
            direito de família e sucessões, sempre com o objetivo de garantir a
            justiça e a proteção dos direitos individuais.
          </p>
        </article>
      </div>
    </section>
  );
};
