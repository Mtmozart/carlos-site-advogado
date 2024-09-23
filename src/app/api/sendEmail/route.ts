import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const secret = '6Le5tEwqAAAAAPdP6mmK2SgnmCbk9H2g_yJFQPr7';
    const { name, email, message, phone, token } = await request.json();
    const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `secret=${secret}&response=${token}`
    });

    const jsonData = await res.json();
    if (jsonData.success) {
      if (!name || !email || !message) {
        return NextResponse.json(
          { error: 'Parâmetros inválidos.' },
          { status: 400 }
        );
      }

      const transporter = nodemailer.createTransport({
        host: process.env.HOST_EMAIL,
        port: Number(process.env.PORT_EMAIL),
        secure: false,
        auth: {
          user: process.env.USER_AUTH_EMAIL,
          pass: process.env.PASS_EMAIL
        }
      });

      const mailOptions = {
        from: process.env.USER_AUTH_EMAIL,
        to: process.env.USER_AUTH_EMAIL,
        subject: 'Prospecto site',
        html: `
          <h3>Dados do cliente:</h3>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>Telefone para contato:</strong> ${phone}</p>
          <p><strong>Mensagem:</strong></p>
          <p>${message}</p>
        `
      };

      await transporter.sendMail(mailOptions);

      return NextResponse.json({ message: 'E-mail enviado com sucesso!' });
    } else {
      return NextResponse.json(
        { error: 'Erro ao enviar e-mail, usuário não humano.' },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: 'Erro ao enviar e-mail.' },
      { status: 500 }
    );
  }
}
