import { useEffect, useRef } from "react";
import { useAppSelector } from "../../hooks/hooks";
import './Canvas.scss';

interface IProps {
}

const Canvas = ({ }: IProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { image } = useAppSelector(state => state.CanvasImgSlice);


    const render = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement ) => {
        canvas.width = 500;
        canvas.height = 400;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const img = new Image();
        img.src = image ? image : 'https://www.uipi.com/wp-content/uploads/2018/07/placeholder.png';
        img.width = canvas.width;
        img.height = canvas.height;

        img.onload = () => {
            // img.naturalHeight
            // img.naturalWidth

            ctx.drawImage(img, 0, 0, img.width, img.height);
        }
        
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');

        if (ctx && canvas) render(ctx, canvas);


    }, [image]);


    return (<div className="canvas">
        <canvas ref={canvasRef} />

    </div>

    );
};

export default Canvas;