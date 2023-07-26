import { Product, ProductResponse } from '@/lib/types/product';

export async function requestProduct(): Promise<Product> {
  const product = 'renegades';

  const res = await fetch(
    `https://www.sungod.co/products/9150/${product}?pdp=1`
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .then((data: ProductResponse) => data[product]);

  return res;
}
