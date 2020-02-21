console.log("npm start to run the project");

const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const url = require("url");

let win;

function createWindow() {
    win = new BrowserWindow({backgroundColor:'#0000000'});

    //win.setIcon('icon 2.png');
    //win.setOpacity(0.9);
    win.maximize();
    win.setMenu(null);
    win.setSize(1280, 720);

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'), 
        protocol: 'file',
        slashes: true
    }));

    win.on('closed', () => {
        win = null;
    })

    //win.webContents.openDevTools();
}

app.on('ready', createWindow);