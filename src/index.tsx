import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import {store} from './store/store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);



    // const render = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement ) => {
    //     canvas.style.width = "100%";
    //     canvas.style.height = "500px";
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
        
    //     const img = new Image();
    //     img.src = image ? image : 'https://www.uipi.com/wp-content/uploads/2018/07/placeholder.png';
    //     img.width = canvas.width;
    //     img.height = canvas.height;

    //     img.onload = () => {
    //         // img.naturalHeight
    //         // img.naturalWidth

    //         ctx.drawImage(img, 0, 0, img.width, img.height);
    //     }
        
    // }

    // useEffect(() => {
    //     const canvas = canvasRef.current;
    //     const ctx = canvas?.getContext('2d');

    //     if (ctx && canvas) render(ctx, canvas);


    // }, [image]);