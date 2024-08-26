import styles from './companyIdentity.module.scss';
import { FaBullseye, FaEye, FaHandshake } from 'react-icons/fa';

export const CompanyIdentity = () => {
  return (
    <section id="identity" className={styles.companyIdentity__container}>
      <div className={styles.companyIdentity__container__item}>
        <FaBullseye />
        <h4>Misão</h4>
        <p>
          Prestar assessoria jurídica de excelência, com foco na defesa dos
          direitos trabalhistas, previdenciários e na promoção da justiça
          racial, assegurando que os direitos de todos sejam respeitados. Nosso
          compromisso é prestar um serviço personalizado, pautado na ética,
          transparência e empatia, buscando soluções justas e eficazes para cada
          cliente.
        </p>
      </div>
      <div className={styles.companyIdentity__container__item}>
        <FaEye />
        <h4>Visão</h4>
        <p>
          Ser reconhecido como referência em Direito do Trabalho, Previdenciário
          e na luta pela igualdade racial, destacando-se pela qualidade do
          atendimento e pela capacidade de obter resultados positivos para
          nossos clientes. Aspiramos a ser um parceiro confiável e respeitado,
          contribuindo para a promoção da justiça social e para a valorização
          dos direitos dos trabalhadores, segurados e pessoas negras que
          enfrentam desafios nos procedimentos de heteroidentificação.
        </p>
      </div>
      <div className={styles.companyIdentity__container__item}>
        <FaHandshake />
        <h4>Valores</h4>
        <p>
          <strong> Ética:</strong> Agir com integridade e respeito, mantendo a
          confidencialidade e a transparência em todas as nossas ações. <br />
          <strong>Compromisso:</strong> Dedicar-nos incansavelmente à defesa dos
          direitos dos nossos clientes, buscando sempre a melhor solução
          jurídica.
          <br />
          <strong>Excelência: </strong> Buscar constantemente o aprimoramento
          profissional e a excelência no atendimento, garantindo a máxima
          qualidade em nossos serviços.
        </p>
      </div>
    </section>
  );
};
