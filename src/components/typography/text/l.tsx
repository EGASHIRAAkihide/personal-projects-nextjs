export function TextL({ children }: { children: React.ReactNode }) {
  return <p className='text-[16px] font-normal leading-[1.7] tracking-[.04em] text-t-body-light dark:text-t-body-dark'>{children}</p>
}