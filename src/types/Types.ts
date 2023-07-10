
export type filterName = 'brightness' | 'saturate' | 'invert' | 'grayscale';

export interface ICanvasImgSlice {
    image: string,
    brightness: number,
    saturate: number,
    invert: number,
    grayscale: number,
    rotate: number,
    rotateY: number,
    rotateX: number, 
}
export interface Ifilter {
    brightness: number,
    saturate: number,
    invert: number,
    grayscale: number,
    rotate: number,
    rotateY: number,
    rotateX: number, 
}