import './Filters.scss';

const Filters = () => {
    return (
        <div className="filters">
            <div className='filters__colors'>
                <h2>Filters</h2>
                <button className='controlBttn'>Brighness</button>
                <button className='controlBttn'>Saturation</button>
                <button className='controlBttn'>Inversion</button>
                <button className='controlBttn'>Grayscale</button>
                <div className='filters__colors-input'>
                    <div className='information'>
                        <span>Brighness</span>
                        <span>100%</span>
                    </div>
                    <input type="range" min={0} max={200} value={100} />
                </div>
            </div>
            <div className='filters__rotateFlips'>
                <h3>Rotare & Flips</h3>
                <div className='wrap'>
                    <button className='transformBttn left' />
                    <button className='transformBttn right' />
                    <button className='transformBttn vertical' />
                    <button className='transformBttn horizontal' />
                </div>
            </div>
        </div>
    );
};

export default Filters;