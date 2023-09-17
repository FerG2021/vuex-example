// api.js
import axios from 'axios';

// Importa tu store si aún no lo has hecho
import productsStore from '../../modules/products/productsStore';

const URL = import.meta.env.VITE_API_URL;

const apiService = {
	async getAllProducts() {
		try {
		  	const response = await axios.get(URL + '/api/subcategoria-listar-todas');
			//   productsStore.commit('getAllProducts', response.data);
			// productsStore.commit('ProductsStore/getAllProducts', response.data);
			// productsStore.mutations(getAllProducts, response.data)
			console.log('response.data.data');
			console.log(response.data.data);
			productsStore.mutations.getAllProducts(response.data.data)
			console.log(productsStore.mutations.getAllProducts(response.data.data));
		  	console.log(response);
		  	return response.data; 
		} catch (error) {
		  	console.error(error);
		  	throw error;
		}
	  },

  async fetchDataFromAPI2() {
    try {
      const response = await axios.get('/endpoint2');
      // Almacena los datos en el store correspondiente
      store.commit('SET_DATA_FOR_API2', response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  
  // Define más funciones para otros endpoints y stores según sea necesario
};

export default apiService; 
