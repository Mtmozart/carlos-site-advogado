import styles from './contact.module.scss';

export const Contact = () => {
  return (
    <section className={styles.contact__container}>
      <div className={styles.contact__container__contact}>
        <h4>Contato</h4>
        <form className={styles.contact__form}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required></input>
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required></input>
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <div>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
      <div className={styles.contact__container__address}>
        <h4>Endereço</h4>
        <span>Av. Lauro Sodré, 1903, Pedrinhas, Porto Velho - RO.</span>
        <h5>Telefone e whatsapp:</h5>
        <span> (69) 99348-8222</span>
      </div>
    </section>
  );
};
