export function HeadingM({ children }: { children: React.ReactNode }) {
  return <h2 className='
    text-[28px] font-medium leading-[1.5] tracking-[.04em]
    md:text-[32px] md:font-normal
    text-t-body-light dark:text-t-body-dark
  '>{children}</h2>
}