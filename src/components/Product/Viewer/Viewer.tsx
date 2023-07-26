import React, { useState } from 'react';

import s from './Viewer.module.css';

import { Option, Product } from '@/lib/types/product';
import { Scene } from '@/lib/types/scenes';
import { ProductContext } from '@/lib/utils/product-context';

import { Options } from './Options';
import { Scenes } from './Scenes';

interface ViewerProps {
  children?: React.ReactNode;
  product: Product;
  scenes: Scene[];
}

function Viewer({ children, product, scenes }: ViewerProps) {
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
      <div className={s.viewer__contain}>
        <div className={s.viewer__container}>
          <button className={s.viewer__close}>Close</button>
          <div className={s.viewer__content}>{nodes}</div>
        </div>
      </div>
    </ProductContext.Provider>
  );
}

Viewer.Options = Options;
Viewer.Scenes = Scenes;

export default Viewer;
