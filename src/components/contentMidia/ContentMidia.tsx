import { ButtonMidia } from '../buttonMidia/ButtonMidia';
import styles from './styles.module.scss';
export function ButtonMidiaScreen() {
  return (
    <div className={styles.container__content}>
      <ButtonMidia
        url={'https://wa.me/5569993488222'}
        urlImage={'/assets/whatsapp_logo.png'}
        background={'#25D366'}
        altDescription={'WhatsApp button'}
      />
      <ButtonMidia
        url={'https://www.instagram.com/advcarlospontes/'}
        urlImage={'/assets/instagram__logo.png'}
        background={'#E4405F'}
        altDescription={'Botão Instagram'}
      />

      <ButtonMidia
        url={
          'https://www.google.com/maps/search/?api=1&query=Lemos+Advocacia+Empresarial+e+Tribut%C3%A1ria,Av.+Lauro+Sodr%C3%A9,+1903,+Pedrinhas,+Porto+Velho+-+RO'
        }
        urlImage={'/assets/local__map.png'}
        background={'#122a4e'}
        altDescription={'Botão localização'}
      />
    </div>
  );
}
