type Props = {
  children: React.ReactNode;
  isTableHead?: boolean;
  isRowEven?: boolean;
}

export function TableTr({
  children,
  isTableHead = false,
  isRowEven = false,
}: Props) {
  return (
    <tr className={`${isTableHead && 'bg-chart-primary-light dark:bg-chart-primary-dark'} ${isRowEven && 'bg-sea-50'}`}>   
      {children}
    </tr>
  )
}