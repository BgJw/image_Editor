import Workspace from './components/workspace/Workspace';
import Filters from './components/filters/Filters';
import ControlButtons from './components/controlButtons/ControlButtons';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { useEffect } from 'react';
import { addImg, saveImage } from './slices/CanvasImgSlice';

function App() {
//   const image = useAppSelector( state => state.CanvasImgSlice.image);
//   const dispatch = useAppDispatch();
//  const canvas = (): any => {
//    const canvas = document.createElement('canvas');
//    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
//    ctx.clearRect(0, 0 ,0 ,0);
   
   
//    const img = new Image();
//    img.src = image;
//    img.onload = () => {
//       canvas.width = img.naturalWidth ;
//       canvas.height = img.naturalHeight ;
//       for (let x = 0; x < img.height; x++) {
//         for (let y = 0; y < img.width; y++) {
//           if (((x + y) % 2 === 0)) {
//             continue
//           }
//           ctx.drawImage(img, y* 10, x*10, 10,10, y*10,x*10, 10 , 10);
//     }
  
//   }
  
// dispatch(addImg(canvas.toDataURL()));
//   const link = document.createElement('a');
//   link.download = 'canvas';

//   link.href = canvas.toDataURL(image);
//   link.click();
//   }
//  }
//   useEffect( () => {
//     canvas()
//   }, [image]);

  return (
    <div className="App" >
      <header className='header'>
        <h1>Image Editor</h1>
      </header>
      <Filters />
      <Workspace />
      <ControlButtons />

    </div>
  );
}

export default App;
