import { createSlice, PayloadAction } from "@reduxjs/toolkit"



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

const initialState: ICanvasImgSlice = {
    image: '',
    brightness: 100,
    saturate: 100,
    invert: 0,
    grayscale: 0,
    rotate: 0,
    rotateY: 0,
    rotateX: 0,
  }
  
  const CanvasImgSlice = createSlice({
    name: 'CanvasImgSlice',
    initialState,
    reducers: {
        addImg: (state, action: PayloadAction<string>) => {
            state.image = action.payload;
        },
        removeImg: (state) => {
            state.image = '';
        },
        setValue: (state, {payload}: PayloadAction<{name: string, value: number}>) => {
            if (payload.name === 'brightness') {
                state.brightness = payload.value;
            }
            if (payload.name === 'saturate') {
                state.saturate = payload.value;
            }
            if (payload.name === 'invert') {
                state.invert = payload.value;
            }
            if (payload.name === 'grayscale') {
                state.grayscale = payload.value;
            }
        },
        resetFilters: (state) => {
            state.brightness = 100;
            state.grayscale = 0;
            state.invert = 0;
            state.saturate = 100;
            state.rotate = 0;
            state.rotateX = 0;
            state.rotateY = 0;
        },
        returnFilters: (state, {payload}: PayloadAction<Ifilter>) => {
            return {...state, ...payload};            
        },
        rotate: (state, {payload}: PayloadAction<{way: string, value: number}> ) => {
            if (payload.way === 'left') {
                state.rotate += payload.value;
            } else if (payload.way === 'right') {
                state.rotate -= payload.value;
            } else if (payload.way === 'vertical'){
                state.rotateY += payload.value
            } else if (payload.way === 'horizontal'){
                state.rotateX += payload.value;
            }
        }
        

    },
    extraReducers: (builder) => {
    },
  });


  export const {addImg, removeImg, setValue, resetFilters, rotate,returnFilters } = CanvasImgSlice.actions;

  export default CanvasImgSlice.reducer;