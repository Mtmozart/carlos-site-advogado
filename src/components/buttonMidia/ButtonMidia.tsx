import Link from 'next/link';
import styles from './styles.module.scss';

type ButtonMidia = {
  url: string;
  urlImage: string;
  background: string;
  altDescription: string;
};

export function ButtonMidia(props: ButtonMidia) {
  const { url, urlImage, background, altDescription } = props;
  return (
    <div
      className={styles.button__content}
      style={{
        backgroundColor: background
      }}
    >
      <Link href={url} className={styles.button__link} target="_blank">
        <img src={urlImage} alt={altDescription} style={{ maxWidth: '67%' }} />
      </Link>
    </div>
  );
}
