import order from '../images/icon-order-confirmed.svg';

const Modal = ({ cartItems, total, setIsModalOpen }) => {
	return (
		<section className="modal">
			<div className="modal-content">
				<div className="modal-header">
					<img className="order" src={order} alt="order" />
					<h1>Order Confirmed</h1>
					<p>We hope you enjoy your food!</p>
				</div>

				<div className="main-modal">
					{cartItems.map((product, index) => (
						<div className="common-modal" key={index}>
							<div className="item-modal">
								<img
									className="dessert-img"
									src={product.image.desktop}
									alt={product.name}
								/>
								<div className="info-modal">
									<h3>{product.name}</h3>
									<div className="date-modal">
										<span>{product.quantity}x</span>
										<span>@ {product.price.toFixed(2)}</span>
									</div>
								</div>
							</div>
							<div className="price-modal">
								<span>${product.price * product.quantity}</span>
							</div>
						</div>
					))}

					<div className="total-modal">
						<div className="total-title">Order Total</div>
						<div className="total-price">${total.toFixed(2)}</div>
					</div>
				</div>

				<div className="modal-footer">
					<button onClick={() => setIsModalOpen(false)} className="confirm">
						Start New Order
					</button>
				</div>
			</div>
		</section>
	);
};

export default Modal;
