import { TableBody, TableCell, TableRow } from '@ui/table'

interface Props {
  message: string
  size: 'desktop' | 'mobile'
}

export default function EmptyState({ message, size }: Props) {
  return (
    <TableBody>
      <TableRow>
        <TableCell
          colSpan={size === 'desktop' ? 7 : size === 'mobile' ? 2 : 1}
          className="text-muted-foreground py-8 text-center text-xl font-bold"
        >
          <span className="text-wrap">{message}</span>
        </TableCell>
      </TableRow>
    </TableBody>
  )
}
