import { useContext, useEffect, useMemo } from 'react';

import s from './LensGuide.module.css';

import { ProductContext } from '@/lib/utils/product-context';

export function Options() {
  const { product, scene, lens, setLens } = useContext(ProductContext);

  const options = useMemo(() => {
    return product?.parts.find((part) => part.name === 'Lenses')?.options ?? [];
  }, [product]);

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = options.find((option) => option.name === e.target.value);

    selected && setLens(selected);
  };

  useEffect(() => {
    if (!lens) {
      setLens(options[0]);
    }
  }, [options, lens, setLens]);

  return (
    <div className={s.lensGuide__options}>
      <select
        className={s.lensGuide__optionsSelect}
        name='lenses'
        id='lenses'
        onChange={handleOptionChange}
      >
        {options?.map((option) => (
          <option
            key={option.name}
            value={option.name}
            selected={option.name === lens?.name}
            disabled={!scene?.sceneImages[option.sku] ?? false}
          >
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
}
