import { HTMLAttributes, forwardRef } from 'react'
import { CheckCircle, AlertCircle, Info, XCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'success' | 'error' | 'warning' | 'info'
  title?: string
}

/**
 * Alert component for displaying messages to users
 */
export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = 'info', title, children, ...props }, ref) => {
    const icons = {
      success: CheckCircle,
      error: XCircle,
      warning: AlertCircle,
      info: Info,
    }

    const Icon = icons[variant]

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(
          'flex items-start space-x-3 p-4 rounded-lg border transition-all duration-300',
          {
            'bg-green-50 dark:bg-green-500/10 border-green-200 dark:border-green-500/30 text-green-800 dark:text-green-400':
              variant === 'success',
            'bg-red-50 dark:bg-red-500/10 border-red-200 dark:border-red-500/30 text-red-800 dark:text-red-400':
              variant === 'error',
            'bg-yellow-50 dark:bg-yellow-500/10 border-yellow-200 dark:border-yellow-500/30 text-yellow-800 dark:text-yellow-400':
              variant === 'warning',
            'bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/30 text-blue-800 dark:text-blue-400':
              variant === 'info',
          },
          className
        )}
        {...props}
      >
        <Icon className="h-5 w-5 flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          {title && (
            <h3 className="font-semibold mb-1">{title}</h3>
          )}
          <div className="text-sm">{children}</div>
        </div>
      </div>
    )
  }
)

Alert.displayName = 'Alert'
