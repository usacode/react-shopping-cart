# react-shopping-cart

- Function Components and State Management:
  The code utilizes React function components and the useState hook to manage the state of the shopping cart.

- Available Items:
  The availableItems array contains objects representing items available for purchase in the store. Each object includes properties such as product (the name of the item) and inStock (the quantity of the item available in stock).

- ShoppingCart Component:
  The ShoppingCart component is the main component responsible for rendering the available items and managing the shopping cart's state.

- addToCart Function:
  This function adds an item to the shopping cart. If the item is already in the cart, it increments the quantity. If not, it adds the item to the cart with a quantity of 1.

- reduceFromCart Function:
  This function reduces the quantity of an item in the cart. If the quantity of the item becomes 0, the item is removed from the cart.

- removeFromCart Function:
  This function completely removes an item from the cart, regardless of its quantity.

- increaseQuantity Function:
  This function increases the quantity of a selected item in the cart, but only if the quantity is less than the available stock. If the quantity reaches the stock limit, it displays an alert informing the user that the quantity cannot exceed the available stock.

- Rendering:
  The component renders the available items and the shopping cart. For available items, it maps through the availableItems array and displays each item along with an "Add to Cart" button. For items in the shopping cart, it displays each item along with its quantity and provides buttons for reducing, removing, and increasing the quantity.

# Run the project

- npm install --global http-server
- http-server -c-1 <path to project root>
