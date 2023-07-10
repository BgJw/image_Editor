import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { resetFilters, returnFilters } from "../../slices/CanvasImgSlice";
import { Ifilter } from "../../types/Types";
import './Workspace.scss';

const Workspace = () => {
    const { image, brightness, grayscale, invert, saturate, rotate, rotateX, rotateY } 
                    = useAppSelector(state => state.CanvasImgSlice);
    const dispatch = useAppDispatch();
    const [history, setHistory] = useState<Ifilter>();
    const [transition, setTransition] = useState(true);
    
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

            {
                image ? 
                <img
                    style={ STYLE } 
                    src={ image }
                    alt=""  className={ `${transition ? 'allTransition ' : 'resetFilter '} imageRefactoring`}
                    
                    onMouseDown={ () => {
                        setTransition(false);
                        setFilter();
                        dispatch(resetFilters());
                    }}
                    onMouseUp={() => {
                        dispatch(returnFilters(history as Ifilter)) 
                        setTimeout(() => {
                            setTransition(true)}, 400)
                        }}/>
                        :
                <img src='https://www.uipi.com/wp-content/uploads/2018/07/placeholder.png' alt="placeholder" className="imageRefactoring" />
            }
        </div>
    );
};

export default Workspace;