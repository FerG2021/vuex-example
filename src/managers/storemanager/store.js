import { createStore } from 'vuex';

import productsStore from '../../modules/products/productsStore';
import clientsStore from '../../modules/clients/clientsStore';

export default createStore({
    modules: {
      ProductsStore: productsStore,
      ClientsStore: clientsStore,
    },
});
