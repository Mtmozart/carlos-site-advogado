import { CoverLandingPage } from '@/components/cover-landig-page/coverLandigPage';
import styles from './styles.module.scss';
export default function post() {
  return (
    <section className={styles.container}>
      <section>
        <CoverLandingPage />
      </section>
      <main>Título e resumo</main>
      <section>O que é</section>
      <section> como reverter</section>
      <section> Casos de sucesso </section>
    </section>
  );
}
