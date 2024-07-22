import { Cover } from '@/components/cover/cover';
import styles from './styles.module.scss';
import { About } from '@/components/about/about';
import { Area } from '@/components/area/area';
import { CompanyIdentity } from '@/components/companyIdentity/companyIdentity';
import { Contact } from '@/components/contact/contact';
export default function Home() {
  return (
    <>
      <main className={styles.main_container}>
        <Cover />
        <About />
        <Area />
        <CompanyIdentity />
        <Contact />
      </main>
    </>
  );
}
