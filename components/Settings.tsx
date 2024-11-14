import { useState, useEffect } from 'react'
import { isMobileOnly } from 'react-device-detect'
import { Chip, Select, SelectItem, Switch } from '@nextui-org/react'

const Settings = () => {
  const [isSelected, setIsSelected] = useState(false)

  useEffect(() => {
    const storedValue = localStorage.getItem('enabledPwaZoom')
    setIsSelected(storedValue === 'true')
  }, [])

  const handleChange = (checked: boolean): void => {
    setIsSelected(checked)
    localStorage.setItem('enabledPwaZoom', checked.toString())
  }

  return (
    <>
      <h2 className="text-2xl font-bold">Налаштування</h2>
      <div className="flex flex-col justify-start pt-5 gap-4">
        <Select
        isDisabled
        label="Вибірковий предмет"
        placeholder='Поки що недоступно'
        >
          <SelectItem key="math" value="math">Математика</SelectItem>
        </Select>
        {!isMobileOnly && (
          <Switch isSelected={isSelected} onValueChange={handleChange}>
            Відкривати посилання ZOOM у браузері{' '}
            <Chip size="sm" color="danger">
              Unstable
            </Chip>
          </Switch>
        )}
      </div>
    </>
  )
}

export default Settings
