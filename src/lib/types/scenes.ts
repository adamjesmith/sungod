export type Scenes = Scene[];

export interface Scene {
  sceneName: string;
  nakedEyeImage: Image;
  sceneImages: { [key: string]: SceneImage };
}

export interface Image {
  id: string;
  responsiveImage: ResponsiveImage;
  focalPoint: FocalPoint;
}

export interface FocalPoint {
  x: number;
  y: number;
}

export interface ResponsiveImage {
  srcSet: string;
  webpSrcSet: string;
  sizes: Sizes;
  src: string;
  width: number;
  height: number;
  aspectRatio: number;
  alt: null;
  title: null;
  bgColor: string;
  base64: string;
}

export enum Sizes {
  MaxWidth1026Px100Vw1026Px = '(max-width: 1026px) 100vw, 1026px',
}

export interface SceneImage {
  lensType: LensType;
  lensColour: string;
  image: Image;
  secondaryImage: Image | null;
}

export enum LensType {
  The4Ko = '4ko',
  The4Kop = '4kop',
  The8Ko = '8ko',
  The8Kop = '8kop',
}

// Converts JSON strings to/from your types
export class Convert {
  public static toScenes(json: string): Scenes[] {
    return JSON.parse(json);
  }

  public static scenesToJson(value: Scenes[]): string {
    return JSON.stringify(value);
  }
}
