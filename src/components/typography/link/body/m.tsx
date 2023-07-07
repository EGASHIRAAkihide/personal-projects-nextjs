import { default as NextLink } from 'next/link';
import { Image } from '@/components/image/index';

type Props = {
  children: React.ReactNode;
  href: string | Object;
}

export function LinkM({
  children,
  href
}: Props) {
  return (
    <div className='items-center flex gap-2'>
      <NextLink href={href} className='
        text-[14px] font-normal leading-[1.7] tracking-[.04em]
        text-t-link-light dark:text-t-link-dark
        focus:text-t-link-light dark:focus:text-t-link-dark focus:underline
        hover:text-t-hover-light dark:hover:text-t-hover-dark hover:underline
        active:text-t-active-light dark:active:text-t-active-dark
        visited:text-t-visited-light dark:visited:text-t-visited-dark
        '>
          {children}
      </NextLink>
      <div className='w-4 h-4'>
        <Image src='/svg/link-fill-false.svg' alt='link-fill-false-icon' aspectRatio='1:1' />
      </div>
    </div>
  )
}