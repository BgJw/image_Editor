import { useEffect, useRef, useState } from 'react';
import './App.css';
import Canvas from './components/canvas/Canvas';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { addImg, removeImg } from './slices/CanvasImgSlice';
import Filters from './components/filters/Filters';
import ControlButtons from './components/controlButtons/ControlButtons';

function App() {
  const {image} = useAppSelector( state => state.CanvasImgSlice);
  const dispatch  = useAppDispatch();
  
  const setFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader: FileReader = new FileReader();

    if(e.target.files && e.target.files[0]){
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = () => {
        dispatch(addImg(String(reader.result)));
    }
  }  


  return (
    <div className="App">
      <header className='header'>
        <h1>Image Editor</h1>
      </header>
      <Filters />
      <Canvas />
      <ControlButtons />


        {/* <label htmlFor="img" className=''>
          <input name='img' type='file' onChange={ e => setFile(e) } accept="image/png, image/jpeg, image/jpg, image/bmp, image/psd, image/svg, image/tga, image/tiff" />
        </label>
      <button onClick={ () => dispatch(removeImg())}>delete photo</button>
     */}
    </div>
  );
}

export default App;
