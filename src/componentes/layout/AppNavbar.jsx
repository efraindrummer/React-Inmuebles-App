import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar } from '@material-ui/core';

export const AppNavbar = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar></Toolbar>
            </AppBar>
        </div>
    )
}
