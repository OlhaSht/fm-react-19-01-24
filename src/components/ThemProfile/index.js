import React, { useContext } from 'react';
import { ThemeContext } from './../../context/index';

const ThemProfile = () => {
    const {lite} = useContext(ThemeContext)
    return (
        <div>
            <h2>sun{lite}</h2>
        </div>
    );
}

export default ThemProfile;
