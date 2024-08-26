import styles from './about.module.scss';
export const About = () => {
  return (
    <section id="about" className={styles.about__container}>
      <article className={styles.about__text}>
        <h2>Sobre</h2>
        <p>
          Sou especialista em Direito e Processo do Trabalho, com sólida
          formação e experiência na área, o que me permite oferecer uma
          assessoria jurídica assertiva e eficiente. Ao longo da minha carreira,
          tenho atuado na defesa dos direitos trabalhistas, sempre comprometido
          com a busca pela justiça e pela proteção dos interesses dos meus
          clientes.
        </p>
        <p>
          Além disso, também sou especializado em Direito Previdenciário, área
          na qual dedico especial atenção à orientação e ao acompanhamento de
          casos envolvendo benefícios previdenciários. Minha atuação visa
          garantir que os direitos dos segurados sejam respeitados,
          proporcionando segurança jurídica e tranquilidade em momentos
          decisivos.
        </p>
        <p>
          Meu objetivo é proporcionar um atendimento personalizado, pautado na
          ética e na transparência, buscando sempre a melhor solução para cada
          caso. Além disso, atuo também na defesa dos direitos de pessoas negras
          (pretas/pardas) que foram reprovadas em procedimentos de
          heteroidentificação, buscando assegurar a justiça e a equidade àqueles
          que, injustamente, tiveram sua identidade étnica violada.
        </p>
      </article>
      <article className={styles.about__image}>
        <img src="/assets/foto-site.jpg" alt="Carlos"></img>
      </article>
    </section>
  );
};
