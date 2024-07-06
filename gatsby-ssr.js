import React from 'react';
import { ThemeModeScript } from 'flowbite-react';

export const onRenderBody = ({ setPreBodyComponents }) => {
    setPreBodyComponents([<ThemeModeScript key="theme-mode-script"/>]);
};
