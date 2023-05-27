import './ControlButtons.scss';

const ControlButtons = () => {
    return (
        <div className="controls">
           <button className='reset'>Reset Filters</button>
           <div className='controls__wrap'>
                <button className='choose'>Choose Image</button>
                <button className='save'>Save Image</button>
           </div> 
        </div>
    );
};

export default ControlButtons;