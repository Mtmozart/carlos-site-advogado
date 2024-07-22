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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, id
            commodi sed sequi dolores veniam, officiis distinctio illo ea
            nostrum tenetur, facere ad. Ducimus quos officiis cumque numquam
            fugiat soluta.
          </p>
        </article>
        <article>
          <FaGavel style={{ color: '#cc9933' }} />
          <h5> Direito civil</h5>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, id
            commodi sed sequi dolores veniam, officiis distinctio illo ea
            nostrum tenetur, facere ad. Ducimus quos officiis cumque numquam
            fugiat soluta.
          </p>
        </article>
      </div>
    </section>
  );
};
