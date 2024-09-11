'use client';
import { useState } from 'react';
import axios from 'axios';
import styles from './contact.module.scss';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    phone: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/sendEmail', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
        alert('Mensagem enviada com sucesso!');
      } else {
        alert('Erro ao enviar mensagem');
      }
    } catch (error) {
      console.error('Erro ao enviar mensagem:', error);
      alert('Erro de rede');
    }
  };

  return (
    <section className={styles.contact__container}>
      <div id="contact" className={styles.contact__container__contact}>
        <h4>Contato</h4>
        <form className={styles.contact__form} onSubmit={handleSubmit}>
          <div className={styles.form__group}>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Digite seu nome"
              aria-label="Nome"
              required
            />
          </div>
          <div className={styles.form__group}>
            <label htmlFor="phone">Telefone</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Digite seu telefone"
              aria-label="Telefone"
              required
            />
          </div>
          <div className={styles.form__group}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Digite seu e-mail"
              aria-label="E-mail"
              required
            />
          </div>
          <div className={styles.form__group}>
            <label htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Digite sua mensagem"
              aria-label="Mensagem"
              required
            ></textarea>
          </div>
          <div className={styles.form__group}>
            <button type="submit" className={styles.submit__button}>
              Enviar
            </button>
          </div>
        </form>
      </div>
      <div className={styles.contact__container__address}>
        <h4>Endereço</h4>
        <span>Av. Lauro Sodré, 1903, Pedrinhas, Porto Velho-RO.</span>
        <h4>Telefone e whatsapp:</h4>
        <span>(69) 99348-8222</span>
      </div>
    </section>
  );
};
