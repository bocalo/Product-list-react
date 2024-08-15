// import { useState, useEffect } from 'react';
// import cartImg from './images/icon-add-to-cart.svg';
// import neutral from './images/icon-carbon-neutral.svg';
// import empty from './images/illustration-empty-cart.svg';
// import removeImg from './images/icon-remove-item.svg';

// function App() {
// 	const [products, setProducts] = useState([]);
// 	const [cart, setCart] = useState({});
// 	console.log(cart);

// 	useEffect(() => {
// 		fetch('data.json')
// 			.then((response) => response.json())
// 			.then((data) => setProducts(data))
// 			.catch((error) => console.error('Error fetching data:', error));
// 	}, []);

// 	const addToCart = (product) => {
// 		setCart((prevCart) => {
// 			const newCart = { ...prevCart };
// 			if (newCart[product.name]) {
// 				newCart[product.name].quantity += 1;
// 			} else {
// 				newCart[product.name] = { ...product, quantity: 1 };
// 			}
// 			return newCart;
// 		});
// 	};

// 	const removeFromCart = (productName) => {
// 		setCart((prevCart) => {
// 			const newCart = { ...prevCart };
// 			if (newCart[productName].quantity > 1) {
// 				newCart[productName].quantity -= 1;
// 			} else {
// 				delete newCart[productName];
// 			}
// 			return newCart;
// 		});
// 	};

// 	return (
// 		<>
// 			<div className="wrapper">
// 				<section className="main-left">
// 					<div className="title">Desserts</div>
// 					<div className="main-list">
// 						{products.map((product, index) => (
// 							<div className="container-product" key={index}>
// 								<div className="product-card">
// 									<img
// 										className="card-img"
// 										src={product.image.desktop}
// 										alt={product.category}
// 									/>
// 									<div className="btn-product">
// 										<button
// 											className="btn-card"
// 											onClick={() => addToCart(product)}
// 										>
// 											<span>
// 												<img src={cartImg} alt="add" />
// 											</span>
// 											Add to Cart
// 										</button>
// 									</div>
// 								</div>
// 								<div className="card-info">
// 									<p className="card-title">{product.category}</p>
// 									<p className="card-name">{product.name}</p>
// 									<p className="card-price">{product.price.toFixed(2)}</p>
// 								</div>
// 							</div>
// 						))}
// 					</div>
// 				</section>
// 				<section className="main-right">
// 					<div className="right-title">
// 						Your Cart (
// 						{Object.values(cart).reduce(
// 							(total, product) => total + product.quantity,
// 							0
// 						)}
// 						)
// 					</div>
// 					{Object.values(cart).length === 0 ? (
// 						<>
// 							<div>
// 								<img className="right-img" src={empty} alt="empty" />
// 							</div>
// 							<div className="right-comment">
// 								Your added items will appear here
// 							</div>
// 						</>
// 					) : (
// 						<div className="full-cart">
// 							<div className="item-products">
// 								{Object.values(cart).map((product, index) => (
// 									<div className="item-product" key={index}>
// 										<div className="item-info">
// 											<h3>{product.name}</h3>
// 											<div className="item-dates">
// 												<span>{product.quantity}x</span>
// 												<span>@ {product.price.toFixed(2)}</span>

// 												<span>
// 													{(product.price * product.quantity).toFixed(2)}
// 												</span>
// 											</div>
// 										</div>
// 										<div className="item-cross">
// 											<img
// 												src={removeImg}
// 												alt="remove"
// 												onClick={() => removeFromCart(product.name)}
// 											/>
// 										</div>
// 									</div>
// 								))}
// 							</div>

// 							<div className="item-total">
// 								<div className="total-title">Order Total</div>
// 								<div className="total-price">
// 									$
// 									{Object.values(cart)
// 										.reduce(
// 											(total, product) =>
// 												total + product.price * product.quantity,
// 											0
// 										)
// 										.toFixed(2)}
// 								</div>
// 							</div>

// 							<div className="buttons">
// 								<button className="btn-delivery">
// 									<span>
// 										<img src={neutral} alt="carbon" />
// 									</span>
// 									<p>This is a carbon-neutral delivery</p>
// 								</button>
// 								<button className="confirm">Confirm Order</button>
// 							</div>
// 						</div>
// 					)}
// 				</section>
// 			</div>
// 		</>
// 	);
// }

// export default App;

Чтобы сделать мобильную верстку этого сайта, я бы использовал следующие подходы:

    Использовал бы медиа-запросы для адаптации дизайна под разные размеры экрана.
    Перестроил бы структуру HTML и CSS для более эффективного использования пространства на маленьком экране.
    Использовал бы flexbox и grid для создания адаптивного дизайна.
    Упростил бы дизайн и удалил бы ненужные элементы для более быстрой загрузки страницы.

Вот пример, как можно сделать мобильную верстку этого сайта:

/* Медиа-запрос для мобильных устройств */
@media (max-width: 375px) {
  /* Изменение структуры HTML */
 .wrapper {
    display: flex;
    flex-direction: column;
  }

  /* Изменение дизайна для мобильных устройств */
 .main-left {
    width: 100%;
    padding: 20px;
  }

 .main-right {
    width: 100%;
    padding: 20px;
  }

  /* Адаптивный дизайн для мобильных устройств */
 .product-card {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

 .product-card img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }

 .product-card.btn-product {
    width: 100%;
    padding: 10px;
  }

  /* Упрощение дизайна для мобильных устройств */
 .full-cart {
    padding: 20px;
  }

 .item-products {
    display: flex;
    flex-direction: column;
  }

 .item-product {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }

 .item-product img {
    width: 50px;
    height: 50px;
    object-fit: cover;
  }
}
		

Это только пример, и вам нужно будет адаптировать его под свои конкретные нужды. Также, вы можете использовать другие методы для создания мобильной верстки, такие как использование CSS-фреймворков или JavaScript-библиотек.

В HTML, вы можете использовать следующие изменения:

<!-- Изменение структуры HTML -->
<div class="wrapper">
  <div class="main-left">
    <!-- Продукты -->
  </div>
  <div class="main-right">
    <!-- Корзина -->
  </div>
</div>
		



