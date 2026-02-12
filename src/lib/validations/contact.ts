import { z } from 'zod'

/**
 * Contact form validation schema using Zod
 */
export const contactFormSchema = z.object({
  name: z.string()
    .min(2, 'Nome deve ter pelo menos 2 caracteres')
    .max(100, 'Nome muito longo (máximo 100 caracteres)'),

  email: z.string()
    .email('Email inválido')
    .max(100, 'Email muito longo (máximo 100 caracteres)'),

  subject: z.string()
    .min(5, 'Assunto deve ter pelo menos 5 caracteres')
    .max(200, 'Assunto muito longo (máximo 200 caracteres)'),

  message: z.string()
    .min(10, 'Mensagem deve ter pelo menos 10 caracteres')
    .max(1000, 'Mensagem muito longa (máximo 1000 caracteres)'),
})

/**
 * Infer TypeScript type from Zod schema
 */
export type ContactFormInput = z.infer<typeof contactFormSchema>

/**
 * Validate contact form data
 * @param data - Form data to validate
 * @returns Validation result with data or errors
 */
export function validateContactForm(data: unknown) {
  return contactFormSchema.safeParse(data)
}
