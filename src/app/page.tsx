import { Cover } from '@/components/cover/cover';
import styles from './styles.module.scss';
import { About } from '@/components/about/about';
import { Area } from '@/components/area/area';
import { CompanyIdentity } from '@/components/companyIdentity/companyIdentity';
import { Contact } from '@/components/contact/contact';
import Head from 'next/head';
export default function Home() {
  return (
    <>
      <Head>
        <title>
          Assessoria Jurídica em Direito do Trabalho e Justiça Racial
        </title>
        <meta
          name="description"
          content="Ofereço assessoria jurídica especializada em Direito do Trabalho e Justiça Racial, focando na defesa dos direitos trabalhistas e previdenciários e na proteção dos direitos de pessoas negras."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.seusite.com/" />
        <meta
          property="og:title"
          content="Assessoria Jurídica em Direito do Trabalho e Justiça Racial"
        />
        <meta
          property="og:description"
          content="Ofereço assessoria jurídica especializada em Direito do Trabalho e Justiça Racial, focando na defesa dos direitos trabalhistas e previdenciários e na proteção dos direitos de pessoas negras."
        />
        <meta property="og:url" content="https://www.seusite.com/" />
        <meta
          property="og:image"
          content="https://www.seusite.com/imagem.jpg"
        />
      </Head>
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
