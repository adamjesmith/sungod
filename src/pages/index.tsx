import { GetStaticProps } from 'next';
import * as React from 'react';

import { Product } from '@/lib/types/product';
import { Scene } from '@/lib/types/scenes';
import { requestProduct } from '@/lib/utils/getProduct';
import { requestScenes } from '@/lib/utils/getScenes';

import Layout from '@/components/layout/Layout';
import Main from '@/components/Main';
import { Viewer } from '@/components/Product';
import Seo from '@/components/Seo';

type Props = {
  product: Product;
  scenes: Scene[];
};

export const getStaticProps: GetStaticProps = async () => {
  const product = await requestProduct();
  const scenes = await requestScenes();

  return {
    props: { product, scenes },
  };
};

export default function HomePage({ product, scenes }: Props) {
  return (
    <Layout>
      <Seo templateTitle='Home' />

      <Main>
        <Viewer product={product} scenes={scenes}>
          <Viewer.Options />
          <Viewer.Scenes />
        </Viewer>
      </Main>
    </Layout>
  );
}
