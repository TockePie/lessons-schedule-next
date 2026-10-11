import { TableBody, TableCell, TableRow } from '@ui/table'

interface Props {
  message: string
  device: 'desktop' | 'mobile'
}

export default function EmptyState({ message, device }: Props) {
  return (
    <TableBody>
      <TableRow>
        <TableCell
          colSpan={device === 'desktop' ? 7 : device === 'mobile' ? 2 : 1}
          className="text-muted-foreground py-8 text-center text-xl font-bold"
        >
          <span className="text-wrap">{message}</span>
        </TableCell>
      </TableRow>
    </TableBody>
  )
}
