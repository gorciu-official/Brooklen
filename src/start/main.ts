/**
 * Brooklen - an open-source alternative to World Wide Web created
 *  by Gorciu, which takes care about privacy.
 * 
 * (c) 2024 Gorciu
 */

import { app, BrowserWindow } from 'electron';

function createWindow() : void {
    let bw = new BrowserWindow({
        minWidth: 1000,
        minHeight: 750
    });
}

app.whenReady().then(createWindow);
app.on('activate', createWindow);