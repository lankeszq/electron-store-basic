const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  getStoreValue: async (key) => {
    return await ipcRenderer.invoke('store-get', key);
  },
  setStoreValue: async (key, value) => {
    await ipcRenderer.invoke('store-set', key, value);
  },
  deleteStoreKey: async (key) => {
    await ipcRenderer.invoke('store-delete', key);
  },
});