import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice.jsx';

export default function CartItem({ onContinueShopping }) {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return <main className="cart-page">
    <div className="section-heading"><span className="eyebrow">Your selection</span><h1>Shopping Cart</h1></div>
    <div className="cart-layout"><section aria-label="Cart items" className="cart-items">
      {items.length === 0 ? <div className="empty-cart"><h2>Your cart is empty</h2><p>A new green friend is only a click away.</p></div> : items.map(item => <article className="cart-row" key={item.id}>
        <img src={item.image} alt={item.name} /><div className="cart-details"><h2>{item.name}</h2><p>Unit price: ${item.price.toFixed(2)}</p><div className="quantity-controls" aria-label={`Quantity for ${item.name}`}>
          <button type="button" aria-label={`Decrease ${item.name} quantity`} onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}>−</button>
          <span aria-live="polite">{item.quantity}</span>
          <button type="button" aria-label={`Increase ${item.name} quantity`} onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}>+</button>
        </div><button className="text-button" type="button" onClick={() => dispatch(removeItem(item.id))}>Delete</button></div>
        <strong>${(item.price * item.quantity).toFixed(2)}</strong>
      </article>)}
    </section><aside className="cart-summary"><h2>Order summary</h2><p><span>Total plants</span><strong>{count}</strong></p><p><span>Total cost</span><strong>${total.toFixed(2)}</strong></p><button type="button" disabled={!items.length} onClick={() => window.alert('Checkout is coming soon!')}>Checkout</button><button className="secondary-button" type="button" onClick={onContinueShopping}>Continue Shopping</button></aside></div>
  </main>;
}
