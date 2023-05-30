import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { rotate, setValue } from '../../slices/CanvasImgSlice';
import { ICanvasImgSlice, filterName } from '../../types/Types';

import './Filters.scss';

const Filters = () => {
    const filter = useAppSelector( state => state.CanvasImgSlice);
    const [activeFilter, setActiveFilter] = useState<filterName>();
    const activeValue = filter[activeFilter as keyof ICanvasImgSlice];   
    const dispatch = useAppDispatch();
    
    const isActiveBttn = () => {
        if (filter.image.length > 0 && activeFilter === undefined) {
            return {
                animation: 'pulse 2s infinite'
            }
        }
    }

    return (
        <div className={filter.image.length > 0 ? "filters": 'filters disabled'}>
            <div className='filters__colors'>
                <h2>Filters</h2>
                <button
                    style={ isActiveBttn()} 
                    className={activeFilter === 'brightness'? 'controlBttn active': 'controlBttn'}
                    onClick={ () => {
                        setActiveFilter('brightness');
                    }}>
                        Brighness
                </button>
                <button 
                    className={activeFilter === 'saturate'? 'controlBttn active': 'controlBttn'}
                    onClick={ () => {
                        setActiveFilter('saturate');
                    }}>
                        Saturation
                </button>
                <button 
                    className={activeFilter === 'invert'? 'controlBttn active': 'controlBttn'}
                    onClick={ () => {
                        setActiveFilter('invert')
                    }}>
                        Inversion
                </button>
                <button 
                    className={activeFilter === 'grayscale'? 'controlBttn active': 'controlBttn'}
                    onClick={ () => {
                        setActiveFilter('grayscale')
                    }}>
                        Grayscale
                </button>
                <div className='filters__colors-input'>
                    <div className='information'>
                        <span>{activeFilter}</span>
                        <span>{activeValue}</span>
                    </div>
                    <input type="range" min={0} max={200}
                        disabled={activeFilter === undefined}
                        value={activeValue}
                        onChange={ e => 
                        dispatch(setValue({name: activeFilter as filterName, value: +e.target.value}))} />
                </div>
            </div>
            <div className='filters__rotateFlips'>
                <h3>Rotare & Flips</h3>
                <div className='wrap'>
                    <button 
                        className='transformBttn left' 
                        onClick={ () => dispatch(rotate({way: 'right',value: 90}))}
                    />
                    <button 
                        className='transformBttn right' 
                        onClick={ () => dispatch(rotate({way: 'left', value: 90}))}
                        />
                    <button 
                        className='transformBttn vertical' 
                        onClick={ () => dispatch(rotate({way: 'horizontal', value: 180}))}
                        />
                    <button 
                        className='transformBttn horizontal' 
                        onClick={ () => dispatch(rotate({way: 'vertical', value: 180}))}
                        />
                </div>
            </div>
        </div>
    );
};

export default Filters;