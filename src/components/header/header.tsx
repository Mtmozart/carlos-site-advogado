import Logo from '../logo/logo';
import Navigation from '../navigation/navigation';
import { TopHeader } from '../topHeader/topHeader';
import styles from './header.module.scss';
export const Header = () => {
  return (
    <nav className={styles.section__top__container}>
      <TopHeader />
      <section className={styles.section__top__container}>
        <Logo />
        <Navigation />
      </section>
    </nav>
  );
};
