import { create } from 'apisauce';

const createServiceApi = () => {
	const api = create({
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		timeout: 10000,
		baseURL: "http://localhost:4000",
	});

	const login = async (payload) => api.post('/login', payload);

	const register = async (payload) => api.post('/register', payload);

	const getProducts = (params) => api.get('/products', params);
	const getProductBySlug = (params) => api.get('/products', params);

	const getCategories = () => api.get('/categories?_embed=products');

	const getOrders = (params) => api.get('/orders', params);
	const deleteOrders = (orderId) => api.delete('/orders/' + orderId);

	const createOrder = (payload) => api.post('/orders', payload);
	const createOrderDetails = (payload) => api.post('/orderDetails', payload);
	const updateUser = (id, payload) => api.patch('/users/' + id, payload);
	const getUserById = (id) => api.get('/users/' + id);

	const createComment = (payload) => api.post('/comments', payload);
	const getCommentsByProductId = (params) => api.get('/comments/', params);

	const createPartner = (data)=> api.post("/partner", data );

	const getPitchs = (params) => api.get("/pitch", params);

	const getPitchById = (id) => api.get("/pitch/" + id,);

	const getLocations =(params) => api.get('/locations',params);
	const createInformation = (data)=> api.post("/Information", data );

	return {
		api,
		login,
		register,
		getProducts,
		getProductBySlug,
		getCategories,
		createOrder,
		createOrderDetails,
		getOrders,
		deleteOrders,
		updateUser,
		getUserById,
		createComment,
		getCommentsByProductId,
		createPartner,
		getPitchs,
		getPitchById,
		getLocations,
		createInformation
	};
};

export const ServiceApi = createServiceApi();