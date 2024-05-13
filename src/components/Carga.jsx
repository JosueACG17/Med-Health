// LoadingSpinner.js
import React from 'react';
import '../styles/carga.css';

const LoadingSpinner = () => {
    return (
        <div id="preloader">
            <div id="volumenes">
                <div className="volume1" />
                <div className="volume2" />
                <div className="volume3" />
                <div className="volume4" />
                <div className="volume5" />
            </div>
            <h3 className='texto'>MED-HEALTH</h3>
        </div>

    );
};

export default LoadingSpinner;
