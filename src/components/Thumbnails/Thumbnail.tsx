import s from './Thumbnails.module.css';

import { Scene } from '@/lib/types/scenes';

import NextImage from '@/components/NextImage';

interface ThumbnailProps {
  selected: boolean;
  thumbnail: Scene;

  onClick: (thumbnail: Scene) => void;
}

export default function Thumbnail({
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
    >
      {selected && (
        <div className={s.thumbnails__overlay}>
          <NextImage
            src='/images/landscape.svg'
            className={s.thumbnails__overlayIcon}
            width='23'
            height='12'
            alt='selected'
          />

          <NextImage
            src='/images/overlay.png'
            width='52'
            height='52'
            alt='selected'
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
      />
    </button>
  );
}
