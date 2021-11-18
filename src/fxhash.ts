export function fxhash(): string {
  return (window as any).fxhash;
}

export function fxrand(): number {
  return (window as any).fxrand();
}

export function registerFeatures(features: {
  [key: string]: string | number | boolean;
}) {
  (window as any).$fxhashFeatures = features;
}
