// se crea este archivo para importar axios de manera global como un plugin
import axios from './axios';

export default {
  install: (app) => {
    app.config.globalProperties.$axios = axios;
  },
};