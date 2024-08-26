// pages/404.tsx
import Link from 'next/link';
const Custom404: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404 - Página Não Encontrada</h1>
      <p style={styles.paragraph}>
        Desculpe, a página que você está procurando não existe.
      </p>
      <Link href="/" style={styles.link}>
        Voltar para a página inicial
      </Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center' as const,
    padding: '50px',
    height: '100vh'
  },
  title: {
    fontSize: '1em',
    marginBottom: '20px'
  },
  paragraph: {
    fontSize: '1em',
    marginBottom: '30px'
  },
  link: {
    fontSize: '1em',
    color: '#0070f3',
    textDecoration: 'none',
    borderBottom: '1px solid transparent',
    transition: 'border-bottom 0.3s'
  }
};

export default Custom404;
