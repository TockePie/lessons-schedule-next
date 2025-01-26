interface CopiedAlertProps {
  isVisible: boolean
  title: string
  description: string
  color: AlertColor
}

enum AlertColor {
  SUCCESS = 'success',
  PRIMARY = 'primary',
  DEFAULT = 'default',
  SECONDARY = 'secondary',
  WARNING = 'warning',
  DANGER = 'danger'
}

export type { CopiedAlertProps }
export { AlertColor }
