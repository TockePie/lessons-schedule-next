import { Dispatch } from 'react'
import { Alert } from '@nextui-org/react'

import { AlertColor, CopiedAlertProps } from './types/alert-props'

function CopiedAlert({
  showAlert,
  setShowAlert
}: {
  showAlert: CopiedAlertProps
  setShowAlert: Dispatch<CopiedAlertProps>
}) {
  const { isVisible, title, description, color } = showAlert

  const restoreAlert = () => {
    setShowAlert({
      isVisible: false,
      title: '',
      description: '',
      color: AlertColor.DEFAULT
    })
  }

  return (
    <div className="md:w-1/2">
      {showAlert.isVisible && (
        <Alert
          color={color}
          isVisible={isVisible}
          title={title}
          description={description}
          onClose={restoreAlert}
        />
      )}
    </div>
  )
}

export default CopiedAlert
