import { useState } from 'react';

import s from './Overlay.module.css';

import { ResponsiveImage } from '@/lib/types/scenes';

import NextImage from '@/components/NextImage';

interface OverlayProps {
  image: ResponsiveImage;
}

export default function Overlay({ image }: OverlayProps) {
  const [range, setRange] = useState(50);

  return (
    <div className={s.overlay__container}>
      <input
        type='range'
        min='10'
        max='90'
        value={range}
        className={s.overlay__slider}
        onChange={(e) => setRange(parseInt(e.target.value))}
      />

      <div
        className={s.overlay__grab}
        style={{
          left: `${range}%`,
        }}
      >
        <NextImage
          useSkeleton
          src='/svg/grab.svg'
          width={24}
          height={24}
          alt='Grab'
        />
      </div>

      <div
        className={s.overlay__imageContainer}
        style={{
          clipPath: `inset(0 0 0 ${range}%)`,
        }}
      >
        <NextImage
          useSkeleton
          className={s.overlay__image}
          src={image.src}
          sizes={image.sizes}
          width={image.width}
          height={image.height}
          alt={image.alt || 'Scene'}
        />
      </div>
    </div>
  );
}
