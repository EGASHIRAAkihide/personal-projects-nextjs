type Props = {
  children: React.ReactNode;
}

export function Table({ children }: Props) {
  return (
    <table className='table-auto w-full'>
      {children}
    </table>
  )
}