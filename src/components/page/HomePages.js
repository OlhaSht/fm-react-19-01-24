import React, { useContext } from 'react';
import { ThemeContext } from '../../context';
import UserProfile from '../UserProfile';
import CONSTANTS from '../../constants';
const {THEMES} = CONSTANTS;
const curretStyle = {
    [THEMES.LIGHT] : {backgroundColor: '#9999ee', color: '#444'},
    [THEMES.DARK] : {backgroundColor: '#222', color: '#eee'}, //пример инлайн стилей встроеных
}

const HomePages = () => {
    const [theme] = useContext(ThemeContext);
    return (
        <div style={curretStyle[theme]}>
            <h1>home page</h1>
            <UserProfile />
        </div>
    );
}

export default HomePages;
