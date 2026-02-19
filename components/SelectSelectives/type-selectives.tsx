'use client'

import { Checkbox } from '@ui/checkbox'
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle
} from '@ui/field'

import { ScheduleEntityType } from '@/types/entities/schedule'
import { SubjectType } from '@/types/entities/subject'

import useSelectives from './context/selected'

interface Props {
  selectives: ScheduleEntityType[]
  type: Omit<SubjectType, 'PRACTICE'>
  selected: string[]
}

export default function TypeSelectives({ selectives, type }: Props) {
  const { selected, toggle } = useSelectives()

  return selectives
    .filter((selective) => selective.subject.type === type)
    .map((selective) => (
      <FieldLabel key={selective.id} className="flex items-center gap-3">
        <Field orientation="horizontal">
          <Checkbox
            id={selective.id}
            name={selective.id}
            checked={selected.includes(selective.subject.subject_id)}
            onCheckedChange={() => toggle(selective.subject.subject_id)}
          />
          <FieldContent>
            <FieldTitle>{selective.subject.title}</FieldTitle>
            <FieldDescription>{selective.subject.teacher}</FieldDescription>
          </FieldContent>
        </Field>
      </FieldLabel>
    ))
}
