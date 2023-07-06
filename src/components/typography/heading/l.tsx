export function HeadingL({ children }: { children: React.ReactNode }) {
  return <h1 className='
    text-[32px] font-medium leading-[1.5] tracking-[.04em]
    md:text-[36px] md:font-normal md:leading-[1.4]
    text-t-body-light dark:text-t-body-dark
  '>{children}</h1>
}