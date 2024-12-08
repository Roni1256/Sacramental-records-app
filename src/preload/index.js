const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('db', {
    create: (record) => ipcRenderer.invoke('db:create', record),
    readAll: () => ipcRenderer.invoke('db:read-all'),
    readOne: (id) => ipcRenderer.invoke('db:read-one', id),
    update: (id, updatedFields) => ipcRenderer.invoke('db:update', id, updatedFields),
    delete: (id) => ipcRenderer.invoke('db:delete', id),
    deleteAll:(id)=>ipcRenderer.invoke('db:delete-all')
});
