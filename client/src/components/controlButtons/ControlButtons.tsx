import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { addImg, resetFilters } from '../../slices/CanvasImgSlice';
import './ControlButtons.scss';

const ControlButtons = () => {
    const { image, brightness, grayscale, invert, saturate, rotate, rotateX, rotateY } = useAppSelector(state => state.CanvasImgSlice);
    const dispatch = useAppDispatch();

    const setFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const reader: FileReader = new FileReader();

        if (e.target.files && e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }
        reader.onload = () => {
            dispatch(addImg(String(reader.result)));
        }
    }
    const saveImage = () => {
        const vertical = rotateX === 0 ? 1 : -1;
        const horizontal = rotateY === 0 ? 1 : -1;

        const img = new Image();
        img.src = image;

        img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;

            ctx.filter = `brightness(${brightness}%) invert(${invert / 2}%)grayscale(${grayscale}%)saturate(${saturate}%) `;

            ctx.translate(canvas.width / 2, canvas.height / 2); 

            rotate && ctx.rotate(rotate * Math.PI / 180);

            ctx.scale(horizontal, vertical);

            ctx.drawImage(img, -canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);


            const link = document.createElement('a');
            const saveNameImage = prompt('Please name the image');
            if (saveNameImage) {
                link.download = saveNameImage;
                link.href = canvas.toDataURL(image);
                link.click();
            }
        }
    }
    return (
        <div className="controls">
            <button
                disabled={!image}
                className='reset'
                onClick={() => dispatch(resetFilters())}>
                    Reset Filters
            </button>
            <div className='controls__wrap'>
                <label htmlFor="img"
                    className='choose'
                    style={{ animation: image.length > 0 ? 'none' : 'pulse 2s infinite' }}>
                    Choose Image
                    <input
                        type="file" id='img'
                        accept="image/jpeg, image/jpg, image/psd, image/tga, image/tiff"
                        onChange={e => setFile(e)} />
                </label>
                <button
                    className='save'
                    disabled={!image}
                    onClick={saveImage}>
                    Save Image
                </button>
            </div>
        </div>
    );
};

export default ControlButtons;