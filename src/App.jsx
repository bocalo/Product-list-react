import { useState, useEffect } from 'react';
import Modal from './Modal/Modal';
import MainProduct from './MainProduct/MainProduct';
import Cart from './Cart/Cart';

function App() {
	const [products, setProducts] = useState([]);
	const [cart, setCart] = useState({});
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		fetch('data.json')
			.then((response) => response.json())
			.then((data) => setProducts(data));
	}, []);

	const addToCart = (product) => {
		setCart((prevCart) => {
			const currentQuantity = prevCart[product.name]?.quantity || 0;

			return {
				...prevCart,
				[product.name]: {
					...product,
					quantity: currentQuantity + 1,
				},
			};
		});
	};

	const removeFromCart = (productName) => {
		setCart((prevCart) => {
			const currentQuantity = prevCart[productName]?.quantity;
			if (currentQuantity > 1) {
				return {
					...prevCart,
					[productName]: {
						...prevCart[productName],
						quantity: currentQuantity - 1,
					},
				};
			} else {
				const newCart = { ...prevCart };
				delete newCart[productName];
				return newCart;
			}
		});
	};

	const handleConfirmOrder = () => {
		const total = cartItems.reduce(
			(total, product) => total + product.price * product.quantity,
			0
		);

		setTotal(total);
		setIsModalOpen(true);
	};

	const cartItems = Object.values(cart);

	return (
		<>
			<div className="wrapper">
				<MainProduct
					products={products}
					addToCart={addToCart}
					cartItems={cartItems}
					removeFromCart={removeFromCart}
				/>

				<Cart
					cartItems={cartItems}
					total={total}
					removeFromCart={removeFromCart}
					handleConfirmOrder={handleConfirmOrder}
				/>
			</div>

			{isModalOpen && cartItems && (
				<Modal
					cartItems={cartItems}
					total={total}
					setIsModalOpen={setIsModalOpen}
				/>
			)}
		</>
	);
}

export default App;
