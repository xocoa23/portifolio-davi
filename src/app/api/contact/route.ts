import { NextRequest, NextResponse } from 'next/server'
import { contactFormSchema } from '@/lib/validations/contact'
import { z } from 'zod'

/**
 * POST /api/contact
 * Handle contact form submissions
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const validatedData = contactFormSchema.parse(body)

    await new Promise(resolve => setTimeout(resolve, 1000))

    return NextResponse.json(
      {
        success: true,
        message: 'Mensagem enviada com sucesso!'
      },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: 'Dados inválidos',
          details: error.errors
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      {
        success: false,
        error: 'Erro ao enviar mensagem. Por favor, tente novamente.'
      },
      { status: 500 }
    )
  }
}
