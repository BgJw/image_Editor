import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { addImg, resetFilters, saveImage } from '../../slices/CanvasImgSlice';
import './ControlButtons.scss';

const ControlButtons = () => {
    const { image } = useAppSelector(state => state.CanvasImgSlice);
    const dispatch = useAppDispatch();

    const setFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const reader: FileReader = new FileReader();

        if (e.target.files && e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }
        reader.onload = () => {
            dispatch(addImg(String(reader.result)));
            dispatch(resetFilters());
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
                    onClick={() => dispatch(saveImage())}>
                    Save Image
                </button>
            </div>
        </div>
    );
};

export default ControlButtons;