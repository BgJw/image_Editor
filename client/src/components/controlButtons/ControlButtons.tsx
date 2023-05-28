import { useAppDispatch } from '../../hooks/hooks';
import { addImg, resetFilters } from '../../slices/CanvasImgSlice';
import './ControlButtons.scss';

const ControlButtons = () => {
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
        <div className="controls">
            <button 
                className='reset'
                onClick={() => dispatch(resetFilters())}>Reset Filters</button>
            <div className='controls__wrap'>
                <label htmlFor="img" className='choose'>
                    Choose Image
                    <input 
                        type="file" id='img' 
                        accept="image/jpeg, image/jpg, image/psd, image/tga, image/tiff"
                        onChange={e => setFile(e)} /> 
                </label>
                <button className='save'>Save Image</button>
            </div>
        </div>
    );
};

export default ControlButtons;