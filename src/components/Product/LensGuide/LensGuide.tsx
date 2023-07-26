import React, { useState } from 'react';

import s from './LensGuide.module.css';

import { Option, Product } from '@/lib/types/product';
import { Scene } from '@/lib/types/scenes';
import { ProductContext } from '@/lib/utils/product-context';

import { Options } from './Options';
import { Scenes } from './Scenes';

interface LensGuideProps {
  children?: React.ReactNode;
  product: Product;
  scenes: Scene[];
}

function LensGuide({ children, product, scenes }: LensGuideProps) {
  const [lens, setLens] = useState<Option>();
  const [scene, setScene] = useState<Scene>(scenes[0]);

  const childrenArray = React.Children.toArray(children);

  const nodes = childrenArray.filter((child) => React.isValidElement(child));

  return (
    <ProductContext.Provider
      value={{
        product,
        scene,
        scenes,
        lens,
        setLens,
        setScene,
      }}
    >
      <div className={s.lensGuide__contain}>
        <div className={s.lensGuide__container}>
          <button className={s.lensGuide__close}>Close</button>
          <div className={s.lensGuide__content}>{nodes}</div>
        </div>
      </div>
    </ProductContext.Provider>
  );
}

LensGuide.Options = Options;
LensGuide.Scenes = Scenes;

export default LensGuide;
