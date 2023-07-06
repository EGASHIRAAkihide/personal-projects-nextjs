export function HeadingXXS({ children }: { children: React.ReactNode }) {
  return <h5 className='
    text-[16px] font-medium leading-[1.7] tracking-[.04em]
    md:text-[20px] md:font-normal md:leading-[1.5]
    text-t-body-light dark:text-t-body-dark
  '>{children}</h5>
}