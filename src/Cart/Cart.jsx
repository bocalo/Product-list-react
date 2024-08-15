import empty from '../images/illustration-empty-cart.svg';
import removeImg from '../images/icon-remove-item.svg';
import neutral from '../images/icon-carbon-neutral.svg';

const Cart = ({ cartItems, removeFromCart, handleConfirmOrder }) => {
	const totalPrice = cartItems
		.reduce((total, product) => total + product.price * product.quantity, 0)
		.toFixed(2);

	return (
		<section className="main-right">
			<div className="right-title">
				Your Cart (
				{cartItems.reduce((total, product) => total + product.quantity, 0)})
			</div>
			{cartItems.length === 0 ? (
				<>
					<div>
						<img className="right-img" src={empty} alt="empty" />
					</div>
					<div className="right-comment">Your added items will appear here</div>
				</>
			) : (
				<div className="full-cart">
					<div className="item-products">
						{cartItems.map((product, index) => (
							<div className="item-product" key={index}>
								<div className="item-info">
									<h3>{product.name}</h3>
									<div className="item-dates">
										<span>{product.quantity}x</span>
										<span>@ {product.price.toFixed(2)}</span>

										<span>{(product.price * product.quantity).toFixed(2)}</span>
									</div>
								</div>
								<div className="item-cross">
									<img
										src={removeImg}
										alt="remove"
										onClick={() => removeFromCart(product.name)}
									/>
								</div>
							</div>
						))}
					</div>

					<div className="item-total">
						<div className="total-title">Order Total</div>
						<div className="total-price">${totalPrice}</div>
					</div>

					<div className="buttons">
						<button className="btn-delivery">
							<span>
								<img src={neutral} alt="carbon" />
							</span>
							<p>This is a carbon-neutral delivery</p>
						</button>
						<button onClick={handleConfirmOrder} className="confirm">
							Confirm Order
						</button>
					</div>
				</div>
			)}
		</section>
	);
};

export default Cart;
