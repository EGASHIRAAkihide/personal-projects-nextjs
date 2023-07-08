type Props = {
  children: React.ReactNode;
}

export function TableTh({
  children
}: Props) {
  return (
    <th className='px-4 py-2 text-t-on-fill'>{children}</th>
  )
}