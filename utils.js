// ComicVerse Hub - Utility Functions

// Cart Management
const Cart = {
  // Get cart from localStorage
  getCart() {
    const cart = localStorage.getItem('comicverseCart');
    return cart ? JSON.parse(cart) : [];
  },

  // Save cart to localStorage
  saveCart(cart) {
    localStorage.setItem('comicverseCart', JSON.stringify(cart));
    this.updateCartBadge();
  },

  // Add item to cart
  addItem(comic) {
    const cart = this.getCart();
    const existingItem = cart.find(item => item.id === comic.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        id: comic.id,
        title: comic.title,
        price: comic.price,
        coverImage: comic.coverImage,
        publisher: comic.publisher,
        quantity: 1
      });
    }

    this.saveCart(cart);
    this.showNotification(`${comic.title} added to cart!`);
    return cart;
  },

  // Remove item from cart
  removeItem(id) {
    const cart = this.getCart();
    const filteredCart = cart.filter(item => item.id !== id);
    this.saveCart(filteredCart);
    return filteredCart;
  },

  // Update item quantity
  updateQuantity(id, quantity) {
    const cart = this.getCart();
    const item = cart.find(item => item.id === id);

    if (item) {
      if (quantity <= 0) {
        return this.removeItem(id);
      }
      item.quantity = quantity;
      this.saveCart(cart);
    }

    return cart;
  },

  // Get total items in cart
  getTotalItems() {
    const cart = this.getCart();
    return cart.reduce((total, item) => total + item.quantity, 0);
  },

  // Get total price
  getTotalPrice() {
    const cart = this.getCart();
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  },

  // Clear cart
  clearCart() {
    localStorage.removeItem('comicverseCart');
    this.updateCartBadge();
  },

  // Update cart badge in navigation
  updateCartBadge() {
    const badge = document.querySelector('.cart-badge');
    if (badge) {
      const total = this.getTotalItems();
      if (total > 0) {
        badge.textContent = total;
        badge.style.display = 'flex';
      } else {
        badge.style.display = 'none';
      }
    }
  },

  // Show notification
  showNotification(message) {
    // Remove existing notification if any
    const existing = document.querySelector('.notification');
    if (existing) {
      existing.remove();
    }

    // Create new notification
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
      notification.style.animation = 'slideIn 0.3s ease-out reverse';
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }
};

// URL Parameter Helper
function getURLParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Format price
function formatPrice(price) {
  const inr = price * 83;
  return `₹${inr.toFixed(0)}`;
}

// Format date
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}

// Initialize cart badge on page load
document.addEventListener('DOMContentLoaded', () => {
  Cart.updateCartBadge();
});

