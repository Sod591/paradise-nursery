import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice.jsx';

export const plants = [
  { id: 'snake', name: 'Snake Plant', category: 'Air Purifying Plants', price: 15, image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=600', description: 'A hardy upright plant that thrives with little attention.' },
  { id: 'peace', name: 'Peace Lily', category: 'Air Purifying Plants', price: 20, image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?w=600', description: 'Graceful dark leaves and elegant white blooms.' },
  { id: 'pothos', name: 'Golden Pothos', category: 'Air Purifying Plants', price: 12, image: 'https://images.unsplash.com/photo-1599598425947-5202edd56bdb?w=600', description: 'A fast-growing trailing vine for shelves and hanging pots.' },
  { id: 'lavender', name: 'Lavender', category: 'Aromatic Plants', price: 18, image: 'https://images.unsplash.com/photo-1499002238440-d264edd596ec?w=600', description: 'Fragrant purple flowers with a soothing scent.' },
  { id: 'rosemary', name: 'Rosemary', category: 'Aromatic Plants', price: 11, image: 'https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=600', description: 'A fragrant kitchen herb with needle-like leaves.' },
  { id: 'mint', name: 'Mint', category: 'Aromatic Plants', price: 9, image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?w=600', description: 'Fresh, bright leaves for a sunny windowsill.' },
  { id: 'aloe', name: 'Aloe Vera', category: 'Easy Care Plants', price: 14, image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600', description: 'A sculptural succulent that likes bright light.' },
  { id: 'zz', name: 'ZZ Plant', category: 'Easy Care Plants', price: 22, image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600', description: 'Glossy foliage that tolerates low light.' },
  { id: 'cactus', name: 'Cactus', category: 'Easy Care Plants', price: 10, image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?w=600', description: 'A small desert companion with a bold silhouette.' },
];

export default function ProductList() {
  const dispatch = useDispatch();
  const cartIds = useSelector(state => state.cart.items.map(item => item.id));
  const categories = [...new Set(plants.map(plant => plant.category))];
  return <main className="catalog" id="products">
    <div className="section-heading"><span className="eyebrow">Our collection</span><h1>Plants for your space</h1><p>Pick a favorite and let your home bloom.</p></div>
    {categories.map(category => <section key={category} aria-label={category}>
      <h2>{category}</h2><div className="product-grid">
        {plants.filter(plant => plant.category === category).map(plant => <article className="product-card" key={plant.id}>
          <img src={plant.image} alt={plant.name} loading="lazy" />
          <div className="product-content"><h3>{plant.name}</h3><p>{plant.description}</p><div className="product-bottom"><strong>${plant.price.toFixed(2)}</strong><button type="button" disabled={cartIds.includes(plant.id)} onClick={() => dispatch(addItem(plant))}>{cartIds.includes(plant.id) ? 'Added to Cart' : 'Add to Cart'}</button></div></div>
        </article>)}
      </div>
    </section>)}
  </main>;
}
