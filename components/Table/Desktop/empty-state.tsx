import { TableBody, TableCell, TableRow } from '@ui/table'

export default function EmptyState({ message }: { message: string }) {
  return (
    <TableBody>
      <TableRow>
        <TableCell
          colSpan={7}
          className="text-muted-foreground py-8 text-center text-xl font-bold"
        >
          <span>{message}</span>
        </TableCell>
      </TableRow>
    </TableBody>
  )
}
