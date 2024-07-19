import styles from './footer.module.scss';
export const Footer = () => {
  return (
    <footer className={styles.footer__container}>
      <div>Todos os direitos reservados &copy;</div>
      <span>Desenvolvido por Matheus Mozart</span>
    </footer>
  );
};
