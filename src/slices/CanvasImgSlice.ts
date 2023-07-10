import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { filterName, ICanvasImgSlice, Ifilter } from "../types/Types";



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
        setValue: (state, { payload }: PayloadAction<{ name: filterName, value: number }>) => {
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
        returnFilters: (state, { payload }: PayloadAction<Ifilter>) => {
            return { ...state, ...payload };
        },
        rotate: (state, { payload }: PayloadAction<{ way: string, value: number }>) => {
            if (payload.way === 'left') {
                state.rotate += payload.value;
            } else if (payload.way === 'right') {
                state.rotate -= payload.value;
            } else if (payload.way === 'vertical') {
                if (state.rotateY === 0) {
                    state.rotateY += payload.value;
                } else {
                    state.rotateY -= payload.value;
                }
            } else if (payload.way === 'horizontal') {
                if (state.rotateX === 0) {
                    state.rotateX += payload.value;
                } else {
                    state.rotateX -= payload.value;
                }
            }
        },
        saveImage: (state) => {
            const vertical = !state.rotateX ? 1 : -1;
            const horizontal = !state.rotateY ? 1 : -1;

            const img = new Image();
            img.src = state.image;

            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;

            ctx.filter = `brightness(${state.brightness}%) invert(${state.invert / 2}%) grayscale(${state.grayscale}%) saturate(${state.saturate}%) `;

            ctx.translate(canvas.width / 2, canvas.height / 2);

            state.rotate && ctx.rotate(state.rotate * Math.PI / 180);

            ctx.scale(horizontal, vertical);
            
            ctx.drawImage(img, -canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);


            const link = document.createElement('a');
            const saveNameImage = prompt('Please name the image');
            if (saveNameImage) {
                link.download = saveNameImage;
                link.href = canvas.toDataURL(state.image);
                link.click();
            }


        }

    },

});


export const {
    addImg, removeImg,
    setValue, resetFilters,
    rotate, returnFilters,
    saveImage } = CanvasImgSlice.actions;

export default CanvasImgSlice.reducer;