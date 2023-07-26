export interface ProductResponse {
  [key: string]: Product;
}

export interface Product {
  id: string;
  sku: string;
  name: string;
  subTitle: string;
  baseProduct: null;
  productInfoTitle: string;
  productInfoText: string;
  hasPdp: boolean;
  url: string;
  pageMode: string;
  icon: string;
  parts: Part[];
  frameTypeOverride: string;
  useBaseProductName: boolean;
  preOrderCopyOverride: string;
  lensNameOverride: string;
  lensChoiceOverride: null;
  staticLensTech: null;
  lifestyleImagesOverride: any[];
  swatchIconOverride: null;
  swappableParts: any[];
  meta: Meta[];
  pdpText: string;
  sizeAndFit: string;
  designImagesOrder: number[];
  showReviews: boolean;
  hideSwatches: null;
  useGenericReviews: boolean;
  relatedProducts: RelatedProducts;
  inTheBoxItems: InTheBoxItem[];
  quotesSectionTitle: string;
  quotes: Quote[];
  heroFeatures: HeroFeature[];
  techSpecs: TechSpec[];
  lensGuideBanner: LensGuideBanner;
  lensPreviewScenes: LensPreviewScene[];
  showLensPreviewIcons: null;
  lensPreviewConditions: string[];
  rowsBelow: any[];
  secondaryProduct: null;
  limitedEditions: LimitedEdition[];
  limitedEditionDescription: string;
  landingPage: null;
  landingPageLinkCopy: string;
  theme: string;
  promoCapsuleCase: PromoCapsuleCase;
  additionalProductSKU: string;
  buyingFlow: BuyingFlow;
  showPackagingOptions: boolean;
  defaultPackagingOption: string;
  ctaSuffix: string;
  showRegisterInterestForm: null;
  registerInterestFormCopy: string;
  accordion: Accordion[];
  productHeroDesigns: ProductHeroDesign[];
  googleProductCategory: string;
  limitedEditionLogo: null;
  logoWidth: null;
  categories: Category[];
  enableVirtualTryOn: boolean;
  vtoEffect: VtoEffect;
  vtoVariantName: string;
  _vtoTransformation: VtoTransformation[];
  oosUnlessInvited: null;
  invitationSegment: null;
  __typename: string;
  lifestyleImages: LifestyleImage[];
  basePrice: number;
  compare_at_amount_float: number;
  currency: Currency;
  doNotTrackStock: boolean;
  quantity: number;
  inboundQuantity: number;
}

export interface VtoTransformation {
  scaleX: number;
  scaleY: number;
  scaleZ: number;
  rotateX: number;
  rotateY: number;
  rotateZ: number;
  moveX: number;
  moveY: number;
  moveZ: number;
  __typename: string;
}

export interface Accordion {
  id: string;
  title: string;
  accordionType: string;
  heading: string;
  tag: string;
  content: AccordionContent;
  __typename: string;
}

export interface AccordionContent {
  value: OptionContentValue;
  __typename: string;
}

export interface OptionContentValue {
  schema: string;
  document: PurpleDocument;
}

export interface PurpleDocument {
  type: string;
  children: PurpleChild[];
}

export interface PurpleChild {
  type: string;
  children: FluffyChild[];
}

export interface FluffyChild {
  type: Type;
  value: string;
  marks?: string[];
}

export enum Type {
  Span = 'span',
}

export interface BuyingFlow {
  pdpCtaText: string;
  steps: Step[];
  __typename: string;
}

export interface Step {
  heading: string;
  primaryContentType: string;
  optionSelectorContentType: string;
  secondaryContent: SecondaryContent[];
  showCartContent: boolean;
  ctaText: string;
  __typename: string;
}

export interface SecondaryContent {
  title: string;
  location: string;
  filters: ContentFilter[];
  content: SecondaryContentContent;
  __typename: string;
}

export interface SecondaryContentContent {
  value: FluffyValue;
  links: Link[];
  __typename: string;
}

export interface Link {
  __typename: string;
  type?: string;
  id: string;
  backgroundColour?: string;
  condensedView?: null;
  style?: string;
  image?: null;
  mobileImage?: null;
  slug?: string;
  title?: string;
  content?: LinkContent;
  uid?: string;
  disableBottomMargin?: boolean;
  footerCopy?: string;
  articles?: Article[];
}

export interface Article {
  id: string;
  title: string;
  bodyCopy: string;
  __typename: string;
}

export interface LinkContent {
  value: PurpleValue;
  __typename: string;
}

export interface PurpleValue {
  schema: string;
  document: FluffyDocument;
}

export interface FluffyDocument {
  type: string;
  children: TentacledChild[];
}

export interface TentacledChild {
  item: string;
  type: string;
}

export interface FluffyValue {
  schema: string;
  document: TentacledDocument;
}

export interface TentacledDocument {
  type: string;
  children: StickyChild[];
}

export interface StickyChild {
  type: string;
  children: IndigoChild[];
}

export interface IndigoChild {
  item: string;
  type: string;
  children: IndecentChild[];
}

export interface IndecentChild {
  type: Type;
  value: string;
}

export interface ContentFilter {
  title: Title;
  value: ValueEnum;
  __typename: ContentFilterTypename;
}

export enum ContentFilterTypename {
  CommerceTagRecord = 'CommerceTagRecord',
}

export enum Title {
  GlobalPrescription = 'Global - Prescription',
}

export enum ValueEnum {
  GlobalPrescription = 'global/prescription',
}

export interface Category {
  __typename: string;
  id: string;
  isComingSoon: boolean;
  contentFilter: ContentFilter | null;
  optionContent: OptionContent;
  heading: string;
}

export interface OptionContent {
  value: OptionContentValue;
  links: any[];
  __typename: string;
}

export enum Currency {
  Gbp = 'GBP',
}

export interface HeroFeature {
  image: HeroFeatureImage;
  label: string;
  title: string;
  detailsLabel: string;
  description: string;
  lensTechFilter: string;
  __typename: string;
}

export interface HeroFeatureImage {
  url: string;
  focalPoint: FocalPoint;
  __typename: ImageTypename;
}

export enum ImageTypename {
  FileField = 'FileField',
}

export interface FocalPoint {
  x: number;
  y: number;
  __typename: FocalPointTypename;
}

export enum FocalPointTypename {
  FocalPoint = 'focalPoint',
}

export interface InTheBoxItem {
  id: string;
  title: string;
  description: string;
  image: VtoEffect;
  __typename: string;
}

export interface VtoEffect {
  url: string;
  __typename: ImageTypename;
}

export interface LensGuideBanner {
  image: ImageElement;
  __typename: string;
}

export interface ImageElement {
  id: string;
  responsiveImage: ResponsiveImage;
  focalPoint: FocalPoint;
  __typename: ImageTypename;
}

export interface ResponsiveImage {
  srcSet: string;
  webpSrcSet: string;
  sizes: string;
  src: string;
  width: number;
  height: number;
  aspectRatio: number;
  alt: null | string;
  title: null;
  bgColor?: string;
  base64?: string;
  __typename: ResponsiveImageTypename;
}

export enum ResponsiveImageTypename {
  ResponsiveImage = 'ResponsiveImage',
}

export interface LensPreviewScene {
  name: string;
  icon: string;
  __typename: string;
}

export interface LifestyleImage {
  id: string;
  optionSku1: string;
  optionSku2: string;
  image: ImageElement;
  __typename: LifestyleImageTypename;
}

export enum LifestyleImageTypename {
  ProductLifestyleImageRecord = 'ProductLifestyleImageRecord',
}

export interface LimitedEdition {
  customisedProduct: CustomisedProduct;
  __typename: string;
}

export interface CustomisedProduct {
  _modelApiKey: string;
  sku: string;
  title: string;
  subTitle: string;
  frameSwatchOverride: string;
  lensSwatchOverride: string;
  swatchIconOverride: VtoEffect;
  lensPart: string;
  limitedEdition: boolean;
  stockManagedPart: string;
  baseProduct: CustomisedProductBaseProduct;
  __typename: CustomisedProductTypename;
}

export enum CustomisedProductTypename {
  ProductPartRecord = 'ProductPartRecord',
  ProductRecord = 'ProductRecord',
}

export interface CustomisedProductBaseProduct {
  id: string;
  sku: string;
  name: string;
  subTitle: string;
  baseProduct: BaseProductBaseProduct;
  productInfoTitle: string;
  productInfoText: string;
  hasPdp: boolean;
  url: string;
  pageMode: string;
  icon: string;
  parts: any[];
  frameTypeOverride: string;
  useBaseProductName: boolean;
  preOrderCopyOverride: string;
  lensNameOverride: string;
  lensChoiceOverride: LensChoiceOverride | null;
  staticLensTech: Tech;
  lifestyleImagesOverride: ImageElement[];
  swatchIconOverride: VtoEffect;
  swappableParts: any[];
  productHeroDesigns: any[];
  googleProductCategory: string;
  limitedEditionLogo: ImageElement;
  logoWidth: null;
  categories: any[];
  showPackagingOptions: null;
  defaultPackagingOption: string;
  enableVirtualTryOn: boolean | null;
  vtoEffect: null;
  vtoVariantName: string;
  _vtoTransformation: any[];
  oosUnlessInvited: null;
  invitationSegment: null;
  __typename: string;
}

export interface BaseProductBaseProduct {
  sku: string;
  name: string;
  __typename: string;
}

export interface LensChoiceOverride {
  id: string;
  name: string;
  partType: PartType;
  sku: string;
  vlt: string;
  swatchStyle: SwatchStyle;
  productOptions: any[];
  productNameOverride: string;
  cartDetailsOverride: any[];
  lifestyleImagesOverride: any[];
  isLimitedEdition: boolean;
  vtoEffectName: string;
  additionalProductSKU: string;
  tags: any[];
  optionTech: Tech;
  __typename: CustomisedProductTypename;
}

export interface Tech {
  tech: Icon;
  icon: Icon;
  displayTitle: DisplayTitle;
  displaySubtitle: string;
  __typename: StaticLensTechTypename;
}

export enum StaticLensTechTypename {
  OptionTechConfigRecord = 'OptionTechConfigRecord',
}

export enum DisplayTitle {
  Polarised = 'Polarised',
  Standard = 'Standard',
  StandardPolarised = 'Standard Polarised',
  The8KOSupSup = '8KO<sup>®</sup>',
  The8KOSupSupPolarised = '8KO<sup>®</sup> Polarised',
  Thin = 'Thin',
  ThinPolarised = 'Thin Polarised',
}

export enum Icon {
  St = 'st',
  Stp = 'stp',
  Th = 'th',
  The4Ko = '4ko',
  The4Kop = '4kop',
  The8Ko = '8ko',
  The8Kop = '8kop',
  Thp = 'thp',
}

export enum PartType {
  Frame = 'frame',
  Icon = 'icon',
  Lenses = 'lenses',
}

export interface SwatchStyle {
  id: string;
  styles: string;
  image: SwatchStyleImage | null;
  __typename: SwatchStyleTypename;
}

export enum SwatchStyleTypename {
  SwatchStyleRecord = 'SwatchStyleRecord',
}

export interface SwatchStyleImage {
  src: string;
  __typename: ImageTypename;
}

export interface Meta {
  attributes: Attributes | null;
  content: null | string;
  tag: Tag;
  __typename: MetaTypename;
}

export enum MetaTypename {
  Tag = 'Tag',
}

export interface Attributes {
  property?: string;
  content: string;
  name?: string;
}

export enum Tag {
  Meta = 'meta',
  Title = 'title',
}

export interface Part {
  id: string;
  skuPrefix: string;
  name: string;
  verboseName: string;
  icon: string;
  imageLayer: number;
  excludeFromAdFeeds: boolean;
  excludeFromProductDetails: null;
  disableInfiniteSwatchIcon: null;
  followerOf: null;
  options: Option[];
  __typename: string;
}

export interface Option {
  id: string;
  name: string;
  partType: PartType;
  sku: string;
  vlt: string;
  swatchStyle: SwatchStyle;
  productOptions: ProductOption[];
  productNameOverride: string;
  cartDetailsOverride: any[];
  lifestyleImagesOverride: any[];
  isLimitedEdition: boolean | null;
  vtoEffectName: string;
  additionalProductSKU: string;
  tags: ContentFilter[];
  optionTech: Tech | null;
  __typename: CustomisedProductTypename;
  amount_float: number;
  compare_at_amount_float: number;
  currency_code: Currency;
  doNotTrackStock: boolean;
  quantity: number;
  inboundQuantity: number;
}

export interface ProductOption {
  description: Description;
  optionTech: Tech;
  __typename: ProductOptionTypename;
  id: ID;
  amount_float: number;
  scm_id: string;
}

export enum ProductOptionTypename {
  SkuOptionRecord = 'SkuOptionRecord',
}

export enum Description {
  TestDescriptionForPrescriptionExtraThin = 'Test description for Prescription - Extra Thin',
  TestDescriptionForPrescriptionExtraThinPolarised = 'Test description for Prescription - Extra Thin Polarised',
  TestDescriptionForPrescriptionThin = 'Test description for Prescription - Thin',
  TestDescriptionForPrescriptionThinPolarised = 'Test description for Prescription - Thin Polarised',
}

export enum ID {
  QZGVlsqkzN = 'qZGVlsqkzN',
  XRVQsPqkRX = 'XRVQsPqkRX',
  YNAoJsryRX = 'YNAoJsryRX',
  ZvGbsEpQjX = 'ZvGbsEpQjX',
}

export interface ProductHeroDesign {
  enabled: boolean;
  parts: PromoCapsuleCase[];
  __typename: string;
}

export interface PromoCapsuleCase {
  sku: string;
  __typename: CustomisedProductTypename;
}

export interface Quote {
  image: ImageElement;
  quote: string;
  __typename: string;
}

export interface RelatedProducts {
  breadcrumbLabel: string;
  breadcrumbTarget: string;
  products: Product[];
  __typename: string;
}

export interface Product {
  sku: string;
  icon: string;
  url: string;
  name: string;
  subTitle: string;
  __typename: string;
}

export interface TechSpec {
  id: string;
  label: string;
  icon: string;
  value: string;
  lensTechFilter: string;
  __typename: string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toProduct(json: string): Product {
    return JSON.parse(json);
  }

  public static productToJson(value: Product): string {
    return JSON.stringify(value);
  }
}
