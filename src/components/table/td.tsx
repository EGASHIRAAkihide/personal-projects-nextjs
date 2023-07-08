type Props = {
  children: React.ReactNode;
}

export function TableTd({
  children,
}: Props) {
  return (
    <td className='px-4 py-2 semantic-light dark:semantic-dark text-center'>{children}</td>
  )
}