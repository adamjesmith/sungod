import s from './Thumbnails.module.css';

import NextImage from '@/components/NextImage';

interface CloseProps {
  onClick: () => void;
}

export default function Close({ onClick }: CloseProps) {
  return (
    <button onClick={() => onClick()} className={s.thumbnails__button}>
      <div className={s.thumbnails__overlay}>
        <NextImage
          src='/svg/close.svg'
          className={s.thumbnails__overlayIcon}
          width='12'
          height='12'
          alt='selected'
        />
      </div>
    </button>
  );
}
