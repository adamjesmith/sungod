import { createContext } from 'react';

import { Option, Product } from '@/lib/types/product';
import { Scene } from '@/lib/types/scenes';

export interface ProductContextProps {
  product?: Product;
  scenes?: Scene[];
  lens?: Option;
  scene?: Scene;
  setLens(option: Option): void;
  setScene(scene: Scene): void;
}

export const ProductContext = createContext<ProductContextProps>({
  setLens: () => null,
  setScene: () => null,
});
