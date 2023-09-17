export default {
	namespaced: true,
	
	state: {
	  	clients: ['Juan Perez', 'Pedro Lopez'],
	},
	
	mutations: {
		addProduct(state, product) {
			state.products.push(product);
		},
		removeProduct(state, productId) {
			state.products = state.products.filter(product => product.id !== productId);
		},
	},
	
	getters: {
		getProducts(state) {
			return state.products;
		},
	},
};
  