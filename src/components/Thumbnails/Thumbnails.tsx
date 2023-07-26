import React from 'react';

import s from './Thumbnails.module.css';

import clsxm from '@/lib/clsxm';

import Close from '@/components/Thumbnails/Close';
import Thumbnail from '@/components/Thumbnails/Thumbnail';

interface ThumbnailsProps {
  children: React.ReactNode;

  className?: string;
}

function Thumbnails({ children, className }: ThumbnailsProps) {
  const rootClassName = clsxm(s.thumbnails__container, className);
  const childrenArray = React.Children.toArray(children);

  const thumbnails = childrenArray.filter((child) =>
    React.isValidElement(child)
  );

  return <div className={rootClassName}>{thumbnails}</div>;
}

Thumbnails.Thumbnail = Thumbnail;
Thumbnails.Close = Close;

export default Thumbnails;
