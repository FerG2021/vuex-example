export default {
	namespaced: true,
	
	state: {
	  	products: [],
	},
	
	mutations: {
		addProduct(state, product) {
			state.products.push(product);
		},
		removeProduct(state, productId) {
			state.products = state.products.filter(product => product.id !== productId);
		},
		getAllProducts(state, products) {
			console.log('getAllProducts');
			console.log('products');
			console.log(products);
			state.products = products; // Actualiza el estado con los datos recibidos
		},
	},
	
	getters: {
		getProducts(state) {
			return state.products;
		},
	},

	actions: {
	}
  };
  