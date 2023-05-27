import { createSlice, PayloadAction } from "@reduxjs/toolkit"



interface ICanvasImgSlice {
    image: string,

}

const initialState: ICanvasImgSlice = {
    image: '',
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
        }
    },
    extraReducers: (builder) => {
    },
  });


  export const {addImg, removeImg} = CanvasImgSlice.actions;

  export default CanvasImgSlice.reducer;