import { useState } from 'react'
import { z } from 'zod'
import { ContactFormData, SubmitStatus } from '@/types'
import { contactFormSchema } from '@/lib/validations/contact'

/**
 * Custom hook for managing contact form state and submission
 */
export function useContactForm() {
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  /**
   * Submit contact form data to API
   * @param data - Form data to submit
   * @returns Promise with success status
   */
  const submitForm = async (data: ContactFormData) => {
    setStatus('loading')
    setErrors({})

    try {
      // Validate form data client-side
      const validated = contactFormSchema.parse(data)

      // Submit to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(validated),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message')
      }

      setStatus('success')
      return { success: true, data: result }
    } catch (error) {
      // Handle Zod validation errors
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {}
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message
          }
        })
        setErrors(fieldErrors)
      }

      setStatus('error')
      return { success: false, error }
    }
  }

  /**
   * Reset form status and errors
   */
  const resetForm = () => {
    setStatus('idle')
    setErrors({})
  }

  /**
   * Clear a specific field error
   * @param field - Field name to clear error for
   */
  const clearError = (field: string) => {
    setErrors((prev) => {
      const newErrors = { ...prev }
      delete newErrors[field]
      return newErrors
    })
  }

  return {
    submitForm,
    resetForm,
    clearError,
    status,
    errors,
    setStatus,
    isLoading: status === 'loading',
    isSuccess: status === 'success',
    isError: status === 'error',
    isIdle: status === 'idle',
  }
}
