import React, { useRef } from 'react';
import { addImg, resetFilters } from '../../slices/CanvasImgSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

type Props = {
    children: React.ReactNode;
};

const AppLayout: React.FC<Props> = ({ children }) => {
    const dispatch = useAppDispatch();
    const { image } = useAppSelector(state => state.CanvasImgSlice);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            dispatch(addImg(String(reader.result)));
            dispatch(resetFilters());
        };
    };

    return (
        <>
            <input
                ref={inputRef}
                type="file"
                style={{ display: 'none' }}
                accept="image/jpeg, image/jpg, image/png"
                onChange={handleFileChange}
            />

            {!image && (
                <div
                    onClick={() => inputRef.current?.click()}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(0, 0, 0, 0.85)',
                        color: '#fff',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1000,
                        cursor: 'pointer',
                        textAlign: 'center',
                        padding: '20px'
                    }}
                >
                    <h1>Tap to upload an image</h1>
                    <p>Supports JPEG, PNG, etc.</p>
                </div>
            )}

            {children}
        </>
    );
};

export default AppLayout;
