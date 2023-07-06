export function HeadingXS({ children }: { children: React.ReactNode }) {
  return <h4 className='
    text-[20px] font-medium leading-[1.5] tracking-[.04em]
    md:text-[24px] md:font-normal
    text-t-body-light dark:text-t-body-dark
  '>{children}</h4>
}