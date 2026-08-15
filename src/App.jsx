import React, { useState } from 'react';
import './styles.css';
import logo from './assets/speedy.png';

function OrderStatus({ current = 1 }) {
  const steps = ['Order Received', 'Dispatched', 'Out for Delivery', 'Delivered'];
  return (
    <div className="order-status">
      <div className="status-track" />
      {steps.map((label, idx) => {
        const step = idx + 1;
        const state = step < current ? 'done' : step === current ? 'current' : 'pending';
        return (
          <div key={label} className="status-step">
            <div className={`status-dot ${state}`} aria-hidden />
            <div className="status-label">{label}</div>
          </div>
        );
      })}
    </div>
  );
}

export default function App() {
  const [address, setAddress] = useState('');
  const [cylinder, setCylinder] = useState('11kg');
  const [quantity, setQuantity] = useState(1);
  const [deliveryOpt, setDeliveryOpt] = useState('speedy');

  const placeOrder = (e) => {
    e?.preventDefault();
    const payload = { address, cylinder, quantity, deliveryOpt };
    console.log('Place order', payload);
    alert('Order placed — check console for payload');
  };

  return (
    <div className="order-screen">
      <header className="topbar">
        <div className="topbar-inner">
          <div className="brand">
            <img src={logo} alt="Speedy LPG" className="header-logo" />
            <div className="brand-title">SPEEDY LPG - Order & Track</div>
          </div>
        </div>
      </header>

      <main className="new-order-card">
        <h1 className="page-title">NEW ORDER</h1>

        <label className="gps-input">
          <span className="gps-icon">📍</span>
          <input placeholder="Location (GPS enabled)" value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>

        <div className="section">
          <div className="section-title">LPG Cylinder Type</div>
          <div className="cylinder-cards">
            <button className={`cyl-card ${cylinder === '11kg' ? 'selected' : ''}`} onClick={() => setCylinder('11kg')}>
              <div className="cyl-img">🛢️</div>
              <div className="cyl-label">11kg<br/><span>Standard</span></div>
            </button>
            <button className={`cyl-card ${cylinder === '5kg' ? 'selected' : ''}`} onClick={() => setCylinder('5kg')}>
              <div className="cyl-img">🛢️</div>
              <div className="cyl-label">5kg<br/><span>Compact</span></div>
            </button>
            <button className={`cyl-card ${cylinder === '45kg' ? 'selected' : ''}`} onClick={() => setCylinder('45kg')}>
              <div className="cyl-img">🛢️</div>
              <div className="cyl-label">45kg<br/><span>Industrial</span></div>
            </button>
          </div>
        </div>

        <div className="section qty-row">
          <div className="section-title">Quantity</div>
          <div className="qty-controls">
            <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>−</button>
            <div className="qty-val">{quantity}</div>
            <button onClick={() => setQuantity((q) => q + 1)}>+</button>
          </div>
        </div>

        <div className="section">
          <div className="section-title">Delivery Option</div>
          <div className="tabs">
            <button className={`tab ${deliveryOpt === 'speedy' ? 'active' : ''}`} onClick={() => setDeliveryOpt('speedy')}>Speedy (within 1 hr)</button>
            <button className={`tab ${deliveryOpt === 'scheduled' ? 'active' : ''}`} onClick={() => setDeliveryOpt('scheduled')}>Scheduled</button>
          </div>
        </div>

        <div className="order-status-wrap">
          <OrderStatus current={2} />
        </div>

        <button className="place-order" onClick={placeOrder}>PLACE ORDER</button>

      </main>

      <nav className="bottom-nav">
        <button className="nav-btn">Home</button>
        <button className="nav-btn active">Orders</button>
        <button className="nav-btn">Track</button>
        <button className="nav-btn">Profile</button>
      </nav>
    </div>
  );
}
