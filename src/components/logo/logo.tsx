import Image from 'next/image';

export default function Logo() {
  return (
    <Image
      src="/assets/logo-to-site.png"
      width={200}
      height={200}
      alt="Carlos Pontes Advocacia e Consultoria"
    />
  );
}
