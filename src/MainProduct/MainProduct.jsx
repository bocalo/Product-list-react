import cartImg from '../images/icon-add-to-cart.svg';
import minus from '../images/icon-decrement-quantity.svg';
import plus from '../images/icon-increment-quantity.svg';

const MainProduct = ({ products, addToCart, cartItems, removeFromCart }) => {
	return (
		<section className="main-left">
			<div className="title">Desserts</div>
			<div className="main-list">
				{products.map((product) => {
					const isInCart = cartItems.find((item) => item.name === product.name);

					return (
						<div className="container-product" key={product.name}>
							<div className="product-card">
								<img
									src={product.image.desktop}
									alt={product.name}
									className={`card-img ${isInCart ? 'selected' : ''}`}
								/>
								<div className="btn-product">
									{isInCart ? (
										<div className="btn-card-selected">
											<div
												className="circle"
												onClick={() => removeFromCart(product.name)}
											>
												<img src={minus} alt="minus" className="minus" />
											</div>
											<div className="count">{isInCart?.quantity || 0}</div>
											<div
												className="circle"
												onClick={() => addToCart(product)}
											>
												<img src={plus} alt="plus" className="plus" />
											</div>
										</div>
									) : (
										<button
											className="btn-card"
											onClick={() => {
												addToCart(product);
											}}
										>
											<span>
												<img src={cartImg} alt="add" />
												Add to Cart
											</span>
										</button>
									)}
								</div>
							</div>
							<div className="card-info">
								<p className="card-title">{product.category}</p>
								<p className="card-name">{product.name}</p>
								<p className="card-price">{product.price}</p>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default MainProduct;

// 	products.map((product) => (
// 		<div className="container-product" key={product.name}>
// 			<div className="product-card">
// 				<img
// 					className="card-img"
// 					src={product.image.desktop}
// 					alt={product.name}
// 				/>
// 				<div className="btn-product">
// 					{cartItems.find((item) => item.name === product.name) ? (
// 						<div className="btn-card-selected">
// 							<div
// 								className="circle"
// 								onClick={() => removeFromCart(product.name)}
// 							>
// 								<img className="minus" src={minus} alt="minus" />
// 							</div>
// 							<div className="count">
// 								{cartItems.find((item) => item.name === product.name)
// 									?.quantity || 0}
// 							</div>
// 							<div className="circle" onClick={() => addToCart(product)}>
// 								<img className="plus" src={plus} alt="plus" />
// 							</div>
// 						</div>
// 					) : (
// 						<button
// 							className="btn-card"
// 							onClick={() => {
// 								addToCart(product);
// 							}}
// 						>
// 							<span>
// 								<img src={cartImg} alt="add" />
// 							</span>
// 							Add to Cart
// 						</button>
// 					)}
// 				</div>
// 			</div>
// 			<div className="card-info">
// 				<p className="card-title">{product.category}</p>
// 				<p className="card-name">{product.name}</p>
// 				<p className="card-price">{product.price}</p>
// 			</div>
// 		</div>
// 	));
// }

// useEffect(() => {
// 	const handleResize = () => {
// 		setIsMobile(window.innerWidth < 375);
// 	};
// 	window.addEventListener('resize', handleResize);
// 	handleResize();
// 	return () => {
// 		window.removeEventListener('resize', handleResize);
// 	};
// }, []);
