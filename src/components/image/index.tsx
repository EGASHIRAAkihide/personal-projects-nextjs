import { default as NextImage } from 'next/image';

type AspectRatioType = '16:9' | '4:3' | '1:1' | 'auto';

type Props = {
  src: string;
  alt: string;
  aspectRatio: AspectRatioType;
}

export function Image({
  src,
  alt,
  aspectRatio = 'auto'
}: Props) {
  return (
    <div className={`
      ${aspectRatio === '16:9' && 'aspect-video'}
      ${aspectRatio === '4:3' && 'aspect-[4/3]'}
      ${aspectRatio === '1:1' && 'aspect-square'}
      ${aspectRatio === 'auto' && 'aspect-auto'}
      relative
      w-full
    `}>
      <NextImage
        src={src}
        alt={alt}
        fill
        sizes='100vw'
        className='object-cover'
      />
    </div>
  )
}