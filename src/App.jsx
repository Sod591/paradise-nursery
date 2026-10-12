import { useState } from 'react';
import { useSelector } from 'react-redux';
import AboutUs from './AboutUs.jsx';
import ProductList from './ProductList.jsx';
import CartItem from './CartItem.jsx';
import './App.css';

export default function App() {
  const [page, setPage] = useState('home');
  const cartCount = useSelector(state => state.cart.items.reduce((sum, item) => sum + item.quantity, 0));
  const navigate = next => { setPage(next); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  return <>
    {page !== 'home' && <header className="site-header"><button className="brand" type="button" onClick={() => navigate('home')}>✿ Paradise Nursery</button><nav aria-label="Main navigation"><button type="button" onClick={() => navigate('products')}>Plants</button><button type="button" onClick={() => navigate('cart')} aria-label={`Shopping cart, ${cartCount} items`}>🛒 Cart <span className="cart-badge">{cartCount}</span></button></nav></header>}
    {page === 'home' && <main className="landing-page"><div className="landing-overlay"><div className="landing-title"><span className="eyebrow">Welcome to Paradise Nursery</span><h1>Bring nature home.</h1><p>Beautiful plants for brighter spaces and happier days.</p><button type="button" onClick={() => navigate('products')}>Get Started →</button></div><AboutUs /></div></main>}
    {page === 'products' && <ProductList />}
    {page === 'cart' && <CartItem onContinueShopping={() => navigate('products')} />}
  </>;
}
