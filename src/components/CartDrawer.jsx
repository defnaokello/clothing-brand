import { FiX } from 'react-icons/fi';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQty, total } = useCart();

  return (
    <>
      <div
        className={`cart-overlay ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(false)}
      />

      <aside className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="cart-drawer__header">
          <h3>Your Cart ({items.length})</h3>
          <button
            className="cart-drawer__close"
            onClick={() => setIsOpen(false)}
            aria-label="Close cart"
          >
            <FiX />
          </button>
        </div>

        <div className="cart-drawer__body">
          {items.length === 0 ? (
            <div className="cart-drawer__empty">
              <p>Your cart is empty.</p>
            </div>
          ) : (
            items.map((item) => (
              <div className="cart-item" key={`${item.id}-${item.size}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item__img"
                />
                <div className="cart-item__info">
                  <span className="cart-item__name">{item.name}</span>
                  <span className="cart-item__meta">Size: {item.size}</span>
                  <span className="cart-item__price">
                    ${(item.price * item.qty).toFixed(2)}
                  </span>
                  <div className="cart-item__qty">
                    <button onClick={() => updateQty(item.id, item.size, item.qty - 1)}>
                      −
                    </button>
                    <span>{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.size, item.qty + 1)}>
                      +
                    </button>
                  </div>
                  <button
                    className="cart-item__remove"
                    onClick={() => removeItem(item.id, item.size)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-drawer__footer">
            <div className="cart-drawer__total">
              <span>Subtotal</span>
              <strong>${total.toFixed(2)}</strong>
            </div>
            <button className="cart-drawer__checkout">Proceed to Checkout</button>
          </div>
        )}
      </aside>
    </>
  );
}