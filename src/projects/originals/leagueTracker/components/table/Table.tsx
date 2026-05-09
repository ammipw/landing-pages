interface TableProps {
  children?: React.ReactNode
}

function Table({ children }: TableProps) {
  return (
    <table>{children}</table>
  )
}

interface TableHeaderProps {
  children?: React.ReactNode
}

function TableHeader({ children }: TableHeaderProps) {
  return (
    <thead>{children}</thead>
  )
}

interface TableBodyProps {
  children?: React.ReactNode
}

function TableBody({ children }: TableBodyProps) {
  return (
    <tbody>{children}</tbody>
  )
}

interface TableRowProps {
  children?: React.ReactNode
}

function TableRow({ children }: TableRowProps) {
  return (
    <tr>{children}</tr>
  )
}

Table.Header = TableHeader
Table.Body = TableBody
Table.Row = TableRow

export default Table