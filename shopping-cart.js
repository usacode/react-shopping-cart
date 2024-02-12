const availableItems = [
  { product: 'Jacket', inStock: 2 },
  { product: 'Pants', inStock: 3 },
  { product: 'Scarf', inStock: 0 },
  { product: 'Pajamas', inStock: 3 },
  { product: 'Shirt', inStock: 1 },
];

function ShoppingCart({ availableItems }) {
  //Define the state of the cart
  const [cartItems, setCartItems] = React.useState([]);

  //Add item into the cart
  const addToCart = (item) => {
    const itemInCart = cartItems.find(
      (cartItem) => cartItem.product === item.product
    );
    if (itemInCart) {
      if (itemInCart.quantity < item.inStock) {
        const updatedCartItems = cartItems.map((cartItem) =>
          cartItem.product === item.product
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
        setCartItems(updatedCartItems);
      } else {
        alert(`There are no more ${item.product} available in stock.`);
      }
    } else {
      if (item.inStock > 0) {
        setCartItems([...cartItems, { ...item, quantity: 1 }]);
      } else {
        alert(`There are no ${item.product} available in stock.`);
      }
    }
  };

  //Reduce the quantity of an item from the cart
  const reduceFromCart = (item) => {
    if (item.quantity === 1) {
      const updatedCartItems = cartItems.filter(
        (cartItem) => cartItem.product !== item.product
      );
      setCartItems(updatedCartItems);
    } else {
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.product === item.product
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
      setCartItems(updatedCartItems);
    }
  };

  //Remove item from the cart
  const removeFromCart = (item) => {
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.product !== item.product
    );
    setCartItems(updatedCartItems);
  };

  //Under the cart, increase the quantity of an item.
  const increaseQuantity = (productName) => {
    const itemToIncrease = cartItems.find(
      (item) => item.product === productName
    );
    if (itemToIncrease) {
      if (itemToIncrease.quantity < itemToIncrease.inStock) {
        const updatedCartItems = cartItems.map((cartItem) =>
          cartItem.product === productName
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
        setCartItems(updatedCartItems);
      } else {
        alert(
          `You cannot increase the quantity of ${productName} beyond the available stock.`
        );
      }
    }
  };

  return (
    <div>
      <h1>Shop To Go</h1>
      <h2>Available Items</h2>
      <ul>
        {availableItems.map((item, index) => (
          <li key={index}>
            {item.product} - In Stock: {item.inStock}{' '}
            <button className="add-button" onClick={() => addToCart(item)}>
              Add to Cart
            </button>
          </li>
        ))}
      </ul>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((cartItem, index) => (
          <li key={index}>
            {cartItem.product} - Quantity: {cartItem.quantity}{' '}
            <button
              className="increase-button"
              onClick={() => increaseQuantity(cartItem.product)}
            >
              More
            </button>
            <button
              className="reduce-button"
              onClick={() => reduceFromCart(cartItem)}
            >
              Reduce
            </button>{' '}
            <button
              className="remove-button"
              onClick={() => removeFromCart(cartItem)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(
  <ShoppingCart availableItems={availableItems} />,
  document.getElementById('root')
);
