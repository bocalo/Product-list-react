// const MobileCart = ({ product, addToCart, cartItems }) => {
// 	//const { name, image, category, price } = product;

// 	if (!cartItems || cartItems.length === 0) return null;
// 	console.log(product, addToCart, cartItems);

// 	return (
// 		<div className="mobile-container-product">
// 			<div className="mobile-product-card">
// 				<img
// 					className="mobile-card-img"
// 					src={product.image.mobile}
// 					alt={product.name}
// 				/>
// 				<div className="mobile-btn-product">import minus from '../images/icon-decrement-quantity.svg';
// import plus from '../images/icon-increment-quantity.svg';
// 					<button className="btn-card" onClick={() => addToCart(product)}>
// 						<span>
// 							<img src={minus} alt="minus" />
// 						</span>
// 						<span>
// 							{cartItems.reduce(
// 								(total, product) => total + product.quantity,
// 								0
// 							)}
// 						</span>
// 						<span>
// 							<img src={plus} alt="plus" />
// 						</span>
// 					</button>
// 				</div>
// 			</div>
// 			<div className="mobile-card-info">
// 				<p className="mobile-card-title">{product.category}</p>
// 				<p className="mobile-card-name">{product.name}</p>
// 				<p className="mobile-card-price">{product.price}</p>
// 			</div>
// 		</div>
// 	);
// };

// export default MobileCart;
