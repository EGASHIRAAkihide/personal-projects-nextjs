type Props = {
  children: React.ReactNode;
}

export function TableTBody({ children }: Props) {
  return <tbody>{children}</tbody>;
}