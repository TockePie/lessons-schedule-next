import { useState, useEffect } from 'react'
import { isMobileOnly } from 'react-device-detect'
import {
  Chip,
  Radio,
  RadioGroup,
  Select,
  SelectItem,
  Switch
} from '@nextui-org/react'

const Settings = () => {
  const [isSelected, setIsSelected] = useState(false)
  const [lessonTypeStyle, setLessonTypeStyle] = useState('chip')

  useEffect(() => {
    const storedValue = localStorage.getItem('enabledPwaZoom')
    const storedLessonTypeStyle = localStorage.getItem('lessonTypeStyle')
    setIsSelected(storedValue === 'true')
    setLessonTypeStyle(storedLessonTypeStyle || 'chip')
  }, [])

  const handleChange = (checked: boolean): void => {
    setIsSelected(checked)
    localStorage.setItem('enabledPwaZoom', checked.toString())
  }

  const handleLessonTypeStyleChange = (value: string): void => {
    setLessonTypeStyle(value)
    localStorage.setItem('lessonTypeStyle', value)
  }

  return (
    <>
      <h2 className="text-2xl font-bold">Налаштування</h2>
      <div className="flex flex-col justify-start pt-5 p-3 gap-y-4">
        <Select
          isDisabled
          label="Вибірковий предмет"
          placeholder="Поки що недоступно"
        >
          <SelectItem key="math" value="math">
            Математика
          </SelectItem>
        </Select>
        {!isMobileOnly && (
          <Switch isSelected={isSelected} onValueChange={handleChange}>
            Відкривати посилання ZOOM у браузері{' '}
            <Chip size="sm" color="danger">
              Unstable
            </Chip>
          </Switch>
        )}
        <RadioGroup
          label="Стиль позначки занять"
          value={lessonTypeStyle}
          onValueChange={handleLessonTypeStyleChange}
        >
          <Radio value="chip">Чіп</Radio>
          <Radio value="border">Обрамлення</Radio>
        </RadioGroup>
      </div>
    </>
  )
}

export default Settings
