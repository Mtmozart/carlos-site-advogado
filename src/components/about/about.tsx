import styles from './about.module.scss';
export const About = () => {
  return (
    <section className={styles.about__container}>
      <article className={styles.about__text}>
        <h2>Sobre</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          suscipit architecto laboriosam beatae eum consectetur nisi voluptates
          sed exercitationem totam tempore accusamus, adipisci cum
          necessitatibus fugit blanditiis ducimus cupiditate laudantium.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          suscipit architecto laboriosam beatae eum consectetur nisi voluptates
          sed exercitationem totam tempore accusamus, adipisci cum
          necessitatibus fugit blanditiis ducimus cupiditate laudantium.
        </p>
      </article>
      <article className={styles.about__image}>
        <img src="/assets/saul-goodman.png" alt="Carlos"></img>
      </article>
    </section>
  );
};
