import s from './Thumbnails.module.css';

import { Scene } from '@/lib/types/scenes';

import NextImage from '@/components/NextImage';

interface ThumbnailProps {
  selected: boolean;
  thumbnail: Scene;

  priority?: boolean;

  onClick: (thumbnail: Scene) => void;
}

export default function Thumbnail({
  priority = false,
  selected,
  thumbnail,
  onClick,
}: ThumbnailProps) {
  const { src } = thumbnail?.nakedEyeImage.responsiveImage;

  return (
    <button
      onClick={() => onClick(thumbnail)}
      key={thumbnail.sceneName}
      className={s.thumbnails__button}
      data-testid='thumbnail-button'
    >
      {selected && (
        <div className={s.thumbnails__overlay}>
          <NextImage
            src='/images/landscape.svg'
            className={s.thumbnails__overlayIcon}
            width='23'
            height='12'
            alt='selected'
            priority={priority}
          />

          <NextImage
            src='/images/overlay.png'
            width='52'
            height='52'
            alt='overlay'
            data-testid='thumbnail-overlay'
            priority={priority}
          />
        </div>
      )}

      <NextImage
        useSkeleton
        className={s.thumbnails__image}
        src={src}
        width='52'
        height='52'
        alt={thumbnail.sceneName}
        priority={priority}
      />
    </button>
  );
}
