import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { Ifilter, resetFilters, returnFilters } from "../../slices/CanvasImgSlice";
import './Workspace.scss';

const Workspace = () => {
    const { image, brightness, grayscale, invert, saturate, rotate, rotateX, rotateY } 
                    = useAppSelector(state => state.CanvasImgSlice);
    const dispatch = useAppDispatch();
    const [history, setHistory] = useState<Ifilter>();

    const STYLE = {
        filter: `brightness(${brightness}%) 
                 invert(${invert /2}%)
                 grayscale(${grayscale}%)
                 saturate(${saturate}%) `,
        transform: `rotate(${rotate}deg) 
                    rotateX(${rotateX}deg) 
                    rotateY(${rotateY}deg)`,
        cursor: image ? 'pointer': 'default',
    };

const setFilter = () => {
    setHistory({
        brightness, 
        grayscale, 
        invert, 
        saturate, 
        rotate, 
        rotateX, 
        rotateY});
}
    
    
    return (
        <div className="workspace">

            <img
                style={ STYLE } 
                src={image? image : 'https://www.uipi.com/wp-content/uploads/2018/07/placeholder.png'} 
                alt=""  className='imageRefactoring'
                
                onMouseDown={ () => {
                    setFilter();
                    dispatch(resetFilters());
                }}
                onMouseUp={() => dispatch(returnFilters(history as Ifilter)) }/>
        </div>
    );
};

export default Workspace;