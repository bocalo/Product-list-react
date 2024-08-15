import cartImg from '../images/icon-add-to-cart.svg';

const ProductCart = ({ product, addToCart }) => {
	const { name, image, category, price } = product;

	return (
		<div className="container-product">
			<div className="product-card">
				<img className="card-img" src={image.desktop} alt={name} />

				<div className="btn-product">
					<button className="btn-card" onClick={() => addToCart(product)}>
						<span>
							<img src={cartImg} alt="add" />
						</span>
						Add to Cart
					</button>
				</div>
			</div>
			<div className="card-info">
				<p className="card-title">{category}</p>
				<p className="card-name">{name}</p>
				<p className="card-price">{price}</p>
			</div>
		</div>
	);
};

export default ProductCart;
