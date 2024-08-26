import styles from './contact.module.scss';

export const Contact = () => {
  return (
    <section className={styles.contact__container}>
      <div id="contact" className={styles.contact__container__contact}>
        <h4>Contato</h4>
        <form className={styles.contact__form}>
          <div>
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" name="name" required></input>
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" name="email" required></input>
          </div>
          <div>
            <label htmlFor="message">Mensagem</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <div>
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
      <div className={styles.contact__container__address}>
        <h4>Endereço</h4>
        <span>Av. Lauro Sodré, 1903, Pedrinhas, Porto Velho-RO.</span>
        <h4>Telefone e whatsapp:</h4>
        <span> (69) 99348-8222</span>
      </div>
    </section>
  );
};
