import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { contactFormSchema } from '@/lib/validations/contact'
import { z } from 'zod'

/**
 * POST /api/contact
 * Handle contact form submissions and send email via Resend
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, subject, message } = contactFormSchema.parse(body)

    const resend = new Resend(process.env.RESEND_API_KEY)
    const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'davideoliveira.lr@gmail.com'

    await resend.emails.send({
      from: 'Portfólio Davi <onboarding@resend.dev>',
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `[Portfólio] ${subject}`,
      html: `
        <h2>Nova mensagem do portfólio</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Assunto:</strong> ${subject}</p>
        <hr />
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
    })

    return NextResponse.json(
      { success: true, message: 'Mensagem enviada com sucesso!' },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: 'Dados inválidos', details: error.errors },
        { status: 400 }
      )
    }

    return NextResponse.json(
      { success: false, error: 'Erro ao enviar mensagem. Por favor, tente novamente.' },
      { status: 500 }
    )
  }
}
