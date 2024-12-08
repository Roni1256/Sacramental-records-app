import { app, shell, BrowserWindow, ipcMain } from 'electron'
import path, { join } from 'path'
import fs from 'fs'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      
      sandbox: false
    },
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

//IPC

const dbFilePath = path.join(app.getPath('userData'),'db.json');
console.log(dbFilePath);

// Ensure the JSON file exists
if (!fs.existsSync(dbFilePath)) {
    fs.writeFileSync(dbFilePath, JSON.stringify([])); // Initialize with an empty array
}

// Utility functions to manage the JSON database
const readDatabase = () => JSON.parse(fs.readFileSync(dbFilePath, 'utf8'));
const writeDatabase = (data) => fs.writeFileSync(dbFilePath, JSON.stringify(data, null, 2), 'utf8');
// Create a new record
ipcMain.handle('db:create', (event, record) => {
    const data = readDatabase();
    const id = data.length ? data[data.length - 1].id + 1 : 1; // Auto-increment ID
    const newRecord = { id, ...record };
    data.push(newRecord);
    writeDatabase(data);
    console.log(record);
    
    console.log("submitted");
    
    return newRecord;
    
});

// Read all records
ipcMain.handle('db:read-all', () => {
    return readDatabase();
});

// Read a specific record
ipcMain.handle('db:read-one', (event, id) => {
    const data = readDatabase();
    return data.find((record) => record.id === id);
});

// Update a record by ID
ipcMain.handle('db:update', (event, id, updatedFields) => {
    const data = readDatabase();
    const index = data.findIndex((record) => record.id === id);
    if (index === -1) {
        throw new Error(`Record with ID ${id} not found.`);
    }
    data[index] = { ...data[index], ...updatedFields };
    writeDatabase(data);
    return data[index];
});


// Delete a record by ID
ipcMain.handle('db:delete', (event, id) => {
    const data = readDatabase();
    const updatedData = data.filter((record) => record.id !== id);
    if (data.length === updatedData.length) {
        throw new Error(`Record with ID ${id} not found.`);
    }
    writeDatabase(updatedData);
    return `Record with ID ${id} has been deleted.`;
});

//Delete all records

ipcMain.handle('db:delete-all', (e) => {
  const data = readDatabase()
  writeDatabase([])
  return `All records have been deleted. ${data.length} records were removed.`
})



  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
