import { useContext } from 'react';

import s from './LensGuide.module.css';

import { ProductContext } from '@/lib/utils/product-context';

import NextImage from '@/components/NextImage';
import Overlay from '@/components/Overlay/Overlay';
import Thumbnails from '@/components/Thumbnails';

export function Scenes() {
  const { lens, scenes, scene, setScene } = useContext(ProductContext);

  const baseImage = scene?.nakedEyeImage.responsiveImage;
  const lensImage = lens && scene?.sceneImages[lens.sku].image.responsiveImage;

  const Image = scene && baseImage && (
    <NextImage
      useSkeleton
      className={s.lensGuide__image}
      src={baseImage.src}
      sizes={baseImage.sizes}
      width={baseImage.width}
      height={baseImage.height}
      alt={scene.sceneName}
    />
  );

  const Lens = lens && lensImage && <Overlay image={lensImage} />;

  const Scenes = scenes && (
    <Thumbnails className={s.lensGuide__thumbnails}>
      {scenes.map((thumbnail) => (
        <Thumbnails.Thumbnail
          key={thumbnail.sceneName}
          selected={thumbnail.sceneName === scene?.sceneName}
          thumbnail={thumbnail}
          onClick={() => setScene(thumbnail)}
        />
      ))}
      {/* eslint */}
      <Thumbnails.Close onClick={() => console.log('closed')} />
    </Thumbnails>
  );

  return (
    <div className={s.lensGuide__scenes}>
      {Lens}
      {Image}
      {Scenes}
    </div>
  );
}
