export function HeadingS({ children }: { children: React.ReactNode }) {
  return <h3 className='
    text-[24px] font-medium leading-[1.5] tracking-[.04em]
    md:text-[28px] md:font-normal
    text-t-body-light dark:text-t-body-dark
  '>{children}</h3>
}