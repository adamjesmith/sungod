import { useContext, useEffect, useMemo } from 'react';

import s from './LensGuide.module.css';

import clsxm from '@/lib/clsxm';
import { Option } from '@/lib/types/product';
import { ProductContext } from '@/lib/utils/product-context';

interface Styles {
  [key: string]: React.CSSProperties[keyof React.CSSProperties];
}

export function Options() {
  const { product, scene, lens, setLens } = useContext(ProductContext);

  const options = useMemo(() => {
    return product?.parts.find((part) => part.name === 'Lenses')?.options ?? [];
  }, [product]);

  const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = options.find((option) => option.name === e.target.value);

    selected && setLens(selected);
  };

  const handleClick = (option: Option) => {
    option && setLens(option);
  };

  useEffect(() => {
    if (!lens) {
      setLens(options[0]);
    }
  }, [options, lens, setLens]);

  const getStyleObjectFromString = (str: string) => {
    const stylesArray = str.split(';').filter(Boolean);

    const parsedStyles: Styles = {};

    stylesArray.forEach((style) => {
      const [property, value]: string[] = style.split(':');
      if (property && value) {
        parsedStyles[property.trim()] = value.trim();
      }
    });

    return parsedStyles;
  };

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
      <div className={s.lensGuide__swatches}>
        {options?.map((option) => {
          const styles = getStyleObjectFromString(option.swatchStyle.styles);

          return (
            <button
              className={clsxm(
                s.lensGuide__swatch,
                option.name === lens?.name && s.lensGuide__swatchActive
              )}
              key={option.id}
              style={styles}
              onClick={() => handleClick(option)}
              disabled={!scene?.sceneImages[option.sku] ?? false}
            />
          );
        })}
      </div>
    </div>
  );
}
